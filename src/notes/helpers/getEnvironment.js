export const getEnvironment = () =>{
    import.meta.env.MODE
    return {
        ...import.meta.env.MODE
    }
}
