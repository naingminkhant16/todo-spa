import { Alert, Container, Divider, Typography } from '@mui/material';

import Item from '../../Components/Item';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import TodoAddForm from '../../Components/TodoAddForm';
import { router } from '@inertiajs/react';
import { useRef } from "react";
import Layout from '../../Layout/Layout';

function Home({ todos, errors }) {

    const [data, setData] = useState(todos)
    const [message, setMessage] = useState('')

    const titleRef = useRef("")
    const descriptionRef = useRef("")

    const addTodo = (title, description) => {
        setMessage('')
        router.post('/todo', { title, description }, {
            onSuccess: (page) => {
                titleRef.current.value = descriptionRef.current.value = '';
                setData(page.props.todos)
                setMessage("Successfully created.")
            },
            onError: (errors) => {
                console.log(errors)
            }
        });
    }

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
                setMessage('Successfully make completed')
            },
            onError: (errors) => {
                console.log(errors)
            }
        });
    }

    return (
        <>
            <Container maxWidth="xs" sx={{ mt: 3 }}>
                {message && <Alert severity='success' sx={{ mb: 2 }} onClose={() => setMessage('')}>{message}</Alert>}

                {errors.title && <Alert severity='error' sx={{ mb: 2 }}>{errors.title}</Alert>}

                {errors.description && <Alert severity='error' sx={{ mb: 2 }}>{errors.description}</Alert>}

                <TodoAddForm addTodo={addTodo} title={titleRef} description={descriptionRef} />

                <Divider sx={{ mt: 1 }}>My Todos</Divider>

                {
                    (data.length > 0)
                        ? data.map(item => <Item key={item.id} item={item} destroy={destroy} handleCompleted={handleCompleted} />)
                        : <Typography color={grey[300]} variant='h6' sx={{ textAlign: 'center', mt: 5 }}>
                            No Todo Yet!
                        </Typography>
                }
            </Container>
        </>
    )
}

Home.layout = page => <Layout>{page}</Layout>

export default Home;