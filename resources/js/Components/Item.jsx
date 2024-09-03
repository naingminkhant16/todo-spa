import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Card, CardContent, Checkbox, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function Item({ item, destroy, handleCompleted }) {
    const destroyItem = (id) => {
        destroy(id);
    }

    return (
        <>
            <Card sx={{ marginBottom: 1, }} >
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            textDecoration: item.completed ? 'line-through' : ''
                        }}>
                            <Checkbox checked={item.completed ? true : false}
                                onChange={() => handleCompleted(item.id)} />
                            <Box>
                                <Typography variant="inherit">{item.title}</Typography>
                                <Typography fontSize={10} color={'secondary'} sx={{ fontStyle: 'italic' }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Button onClick={() => destroyItem(item.id)}> <DeleteIcon color='error' /></Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}