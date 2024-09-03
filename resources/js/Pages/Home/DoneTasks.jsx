import { useState } from "react";
import Layout from "../../Layout/Layout";
import { Alert, Container, Divider, Typography } from "@mui/material";
import Item from "../../Components/Item";
import { router } from "@inertiajs/react";
import { grey } from "@mui/material/colors";

function DoneTasks({ todos }) {

    const [data, setData] = useState(todos);
    const [message, setMessage] = useState('');

    const destroy = (id) => {
        router.delete('/todo/' + id, {
            onSuccess: (page) => {
                setData(page.props.todos)
                setMessage("Successfully deleted.")
            },
            onError: (errors) => {
                console.log(errors);
            }
        })
    }

    const handleCompleted = (id) => {
        const todo = data.filter(i => i.id == id)[0];

        const url = "/todo" +
            ((todo.completed == 0) ? "/make-completed/" : "/make-uncomplete/")
            + id;

        router.patch(url, null, {
            onSuccess: (page) => {
                setData(page.props.todos)
                setMessage('Successfully remove from completed')
            },
            onError: (errors) => {
                console.log(errors)
            }
        });
    }

    return (
        <Container maxWidth="xs" sx={{ mt: 3 }}>
            {message && <Alert severity='success' sx={{ mb: 2 }} onClose={() => setMessage('')}>{message}</Alert>}

            <Divider sx={{ mt: 1 }}>My Done Tasks</Divider>
            {
                (data.length > 0)
                    ? data.map(item => <Item key={item.id} item={item} destroy={destroy} handleCompleted={handleCompleted} />)
                    : <Typography color={grey[300]} variant='h6' sx={{ textAlign: 'center', mt: 5 }}>
                        No Done Task Yet!
                    </Typography>
            }
        </Container>
    )
}

DoneTasks.layout = page => <Layout>{page}</Layout>

export default DoneTasks;
