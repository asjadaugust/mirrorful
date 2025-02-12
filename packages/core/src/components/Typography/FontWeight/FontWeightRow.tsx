import { Box, Text } from '@chakra-ui/react'
import { TNamedToken } from '@core/types'

export function FontWeightRow({
  fontWeightData,
  placeholder,
}: {
  fontWeightData: TNamedToken
  placeholder: string
}) {
  return (
    <>
      <Box>
        <Text css={{ fontWeight: 'bold', width: 100 }} fontSize={18}>
          {fontWeightData.token.value}
        </Text>
      </Box>
      <Box
        css={{
          fontSize: '1rem',
          fontWeight: fontWeightData.token.value,
          width: '100%',
        }}
      >
        {placeholder}
      </Box>
    </>
  )
}
