
import {
    Box,
    Typography,
    Chip,
    Stack,
    Button,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
// import { useNavigate } from 'react-router-dom';

interface ToolCardProps {
    title: string;
    description: string;
    category: string;
    image: string;
    tags?: string[];
    isFree?: boolean;
    url?: string;
}

export default function ToolCard({
    title,
    description,
    category,
    image,
    tags = [],
    isFree = false,
    // url,

}: ToolCardProps) {
    // const navigate = useNavigate()
    return (
        <Box
            sx={{
                border: '1px solid #e4e4e7',
                borderRadius: '14px',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.15s ease',
                '&:hover': {
                    borderColor: '#c4b5fd',
                    backgroundColor: '#fafafa',
                },
            }}
        >
            {/* IMAGE (NEW BUT STRUCTURALLY TOPAI-CORRECT) */}
            <Box
                sx={{
                    width: '100%',
                    height: 140,
                    backgroundColor: '#f4f4f5',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* CONTENT */}
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.2 }}>

                {/* TITLE + BADGE */}
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Typography
                        sx={{
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: '#111827',
                        }}
                    >
                        {title}
                    </Typography>

                    {isFree && (
                        <Chip
                            label="Free"
                            size="small"
                            sx={{
                                height: 20,
                                fontSize: '11px',
                                fontWeight: 600,
                                backgroundColor: '#ecfdf5',
                                color: '#059669',
                            }}
                        />
                    )}
                </Stack>

                {/* DESCRIPTION */}
                <Typography
                    sx={{
                        fontSize: '0.82rem',
                        color: '#71717a',
                        lineHeight: 1.4,
                    }}
                >
                    {description}
                </Typography>

                {/* CATEGORY */}
                <Chip
                    label={category}
                    size="small"
                    sx={{
                        height: 22,
                        fontSize: '11px',
                        backgroundColor: '#f4f4f5',
                        color: '#3f3f46',
                        fontWeight: 500,
                        width: 'fit-content',
                    }}
                />

                {/* TAGS */}
                {tags.length > 0 && (
                    <Stack direction="row" spacing={0.8} sx={{ flexWrap: 'wrap' }}>
                        {tags.slice(0, 3).map((tag) => (
                            <Chip
                                key={tag}
                                label={`#${tag}`}
                                size="small"
                                sx={{
                                    height: 20,
                                    fontSize: '10px',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e4e4e7',
                                    color: '#52525b',
                                }}
                            />
                        ))}
                    </Stack>
                )}

                {/* ACTION */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
                    <Button
                        size="small"
                        endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                        // href={url}
                        // target="_blank"

                        //  onClick={() => {
                        //     navigate(url)
                        // }}
                        sx={{
                            textTransform: 'none',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#7c3aed',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '8px',
                            minWidth: 'unset',
                            '&:hover': {
                                backgroundColor: '#f5f3ff',
                            },
                        }}
                    >
                        Visit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}