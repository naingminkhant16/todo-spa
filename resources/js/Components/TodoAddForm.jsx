import { Button, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";


export default function TodoAddForm({ addTodo, title, description }) {

    const add = () => {
        addTodo(title.current.value, description.current.value);
    }

    return (
        <>
            <TextField label="Title" variant="outlined" fullWidth size="small" sx={{ mb: 1 }} inputRef={title} />
            <TextField
                label="Description"
                multiline
                fullWidth
                size="small"
                maxRows={4}
                sx={{ mb: 1 }}
                inputRef={description}
            />

            <Button onClick={() => add()} fullWidth variant="contained" >Add Todo</Button>
        </>
    )
}