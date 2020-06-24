export const baseTaskbarState = [
    {
        id: 1,
        windowIsOpen: true,
    }
    
]

export const isWindowOpen = (id, taskbarState) => taskbarState.find((task) => task.id === id ).windowIsOpen


// export const baseTaskbarState = [null, "1"]