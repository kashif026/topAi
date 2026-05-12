import { Box, Typography } from '@mui/material'


function CommonFeature({ title }: { title: string }) {
    return (
        <Box sx={{ borderBottom: '1px solid #dee2e6', mb: 4 }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'black' }}>
                {title}
            </Typography>
        </Box>
    )
}

export default CommonFeature