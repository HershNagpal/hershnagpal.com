export const baseTaskbarState = [
    {
        id: 0,
        windowIsOpen: true,
        focused: true,
    }
    
]

const taskIsInTaskbar = (id, taskbarState) =>  (taskbarState.find((task) => task.id === id) === undefined)? false : true

const unfocusAll = (taskbarState) => {
    return taskbarState.map((task) => ( 
        task.focused === true ? { 
            id: task.id, 
            windowIsOpen: task.windowIsOpen,
            focused: false,
        } : task
    ))
}

export const focusWindow = (id, taskbarState) => {
    const unfocusedState = unfocusAll(taskbarState)
    return unfocusedState.map((task) => ( 
        task.id === id ? { 
            id: task.id, 
            windowIsOpen: task.windowIsOpen,
            focused: true,
        } : task
    ))
}

export const isWindowOpen = (id, taskbarState) => taskbarState.find((task) => task.id === id ).windowIsOpen

export const closeWindow = (id, taskbarState) => taskbarState.filter((task) => task.id !== id)

export const minimizeWindow = (id, taskbarState) => {
    return taskbarState.map((task) => ( 
        task.id === id ? { 
            id: task.id, 
            windowIsOpen: !task.windowIsOpen,
            focused: false,
        } : task
    ))
}

export const openWindow = (id, taskbarState) => {
    if (!taskIsInTaskbar(id, taskbarState)) {
        return {
            id: id,
            windowIsOpen: true,
            focused: false,
        }
    }
}

export const toggleWindow = (id, taskbarState) => {
    // unfocusAll(taskbarState)
    return taskbarState.map((task) => ( 
        task.id === id ? { 
            id: task.id, 
            windowIsOpen: !task.windowIsOpen,
            focused: task.windowIsOpen? false: true,
        } : task
    ))
}
