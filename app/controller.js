import tasks from "./taskmodel.js"

const controller = {
    add: async (newTask) => {
        tasks.push(newTask)
        return true
    },
    delete: (id) => {
        // usuwanie po id z animalsArray
    },
    update: (id) => {
        // update po id elementu animalsArray
    },
    getall: async () => {
        return tasks
    },
    getone: async (id) => {
        let x = tasks.find((task) => task.id == id)

        return x
    }

}
export default controller