export const getEnvironment = () =>{
    import.meta.env
    return {
        ...import.meta.env
    }
}