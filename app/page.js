"use client"

import { useState, useEffect } from "react"
import { toast } from "sonner"
import TaskFilters from "@/components/homepage/tasks/task-filter"
import AddTaskForm from "@/components/homepage/tasks/add-task-form"
import TaskList from "@/components/homepage/tasks/task-list"

export default function HomePage() {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState([])

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks")
        if (storedTasks) {
            try {
                const parsedTasks = JSON.parse(storedTasks)
                setTasks(parsedTasks)
                setFilteredTasks(parsedTasks)
            } catch (error) {
                console.error("Errore nel parsing dei task da localStorage:", error)
                setTasks([])
                setFilteredTasks([])
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleAddTask = (newTask) => {
        const updatedTasks = [
            ...tasks,
            { ...newTask, id: Date.now(), date: new Date().toISOString() },
        ]
        setTasks(updatedTasks)
        setFilteredTasks(updatedTasks)
        toast.success("Attività aggiunta con successo!")
    }

    const handleToggleComplete = (taskId) => {
        const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
        setTasks(updatedTasks)
        setFilteredTasks(updatedTasks)
        const task = updatedTasks.find((task) => task.id === taskId)
        if (task) {
            toast.success(
                task.completed ? `"${task.title}" segnata come completata!` : `Completamento di "${task.title}" annullato!`,
            )
        }
    }

    const handleDeleteTask = (taskId) => {
        const taskToDelete = tasks.find((task) => task.id === taskId)
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)
        setFilteredTasks(updatedTasks)
        if (taskToDelete) {
            toast.error(`Attività "${taskToDelete.title}" eliminata.`)
        }
    }

    const handleFilter = (filtered) => {
        setFilteredTasks(filtered)
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Colonna sinistra: Aggiunta task */}
                    <div className="lg:w-1/3">
                        <AddTaskForm onAddTask={handleAddTask} />
                    </div>

                    {/* Colonna destra: Filtri e lista attività */}
                    <div className="lg:w-2/3 space-y-8">
                        <TaskFilters tasks={tasks} onFilter={handleFilter} initialTasks={tasks} />
                        <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} />
                    </div>
                </div>
            </div>
        </div>
    )
}