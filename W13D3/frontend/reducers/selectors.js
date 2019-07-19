export const getAllTodos = ({ todos }) => {
    return (
        Object.keys(todos).map(id => todos[id])

    )

    
};
