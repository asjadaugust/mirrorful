import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'
import { TExportFileType } from '@core/types'
import { getExportFileTypeName } from '@core/utils/getExportFileTypeString'

type Props = {
  isOpen: boolean
  onClose: () => void
  fileTypes: TExportFileType[]
  onUpdateFileTypes: (next: TExportFileType[]) => void
}

export function ExportSettingsModal({
  isOpen,
  onClose,
  fileTypes,
  onUpdateFileTypes,
}: Props) {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Export Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" gap={3}>
            <Heading size="sm">File Types</Heading>
            <CheckboxGroup
              defaultValue={fileTypes}
              onChange={onUpdateFileTypes}
            >
              <VStack alignItems="flex-start">
                {['css', 'scss', 'js', 'cjs', 'ts', 'json'].map((x) => (
                  <Checkbox key={x} value={x} defaultChecked={true}>
                    {getExportFileTypeName(x as TExportFileType)}
                  </Checkbox>
                ))}
              </VStack>
            </CheckboxGroup>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} colorScheme="blue">
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
