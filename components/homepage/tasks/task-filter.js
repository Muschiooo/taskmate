"use client"

import { useState, useEffect } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter } from "lucide-react"

export default function TaskFilters({ tasks, onFilter, initialTasks }) {
    const [filter, setFilter] = useState("Tutti")
    const [sort, setSort] = useState("Data") // Default sort by Date (newest first)

    // Effettua il primo filtraggio/ordinamento quando il componente viene montato o initialTasks cambia
    useEffect(() => {
        if (initialTasks) {
            applyFilterAndSort(filter, sort, initialTasks)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialTasks, filter, sort])

    const handleFilterChange = (value) => {
        setFilter(value)
        applyFilterAndSort(value, sort, tasks)
    }

    const handleSortChange = (value) => {
        setSort(value)
        applyFilterAndSort(filter, value, tasks)
    }

    const applyFilterAndSort = (currentFilter, currentSort, tasksToProcess) => {
        let filteredTasks = [...tasksToProcess] // Crea una copia per evitare mutazioni dirette

        if (currentFilter === "Completati") {
            filteredTasks = filteredTasks.filter((task) => task.completed)
        } else if (currentFilter === "Da completare") {
            filteredTasks = filteredTasks.filter((task) => !task.completed)
        }

        if (currentSort === "Alfabetico") {
            filteredTasks.sort((a, b) => a.title.localeCompare(b.title))
        } else if (currentSort === "Data") {
            // Ordina per data decrescente (più recenti prima)
            filteredTasks.sort((a, b) => new Date(b.date) - new Date(a.date))
        }
        onFilter(filteredTasks)
    }

    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-blue-500">
                    <Filter className="w-5 h-5 text-indigo-600" />
                    Filtra e Ordina Attività
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="task-filter-select" className="text-gray-700 font-medium">
                        Filtra per stato
                    </Label>
                    <Select onValueChange={handleFilterChange} value={filter} id="task-filter-select">
                        <SelectTrigger className="focus:ring-blue-500 focus:border-blue-500">
                            <SelectValue placeholder="Seleziona filtro" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Tutti">Tutti</SelectItem>
                            <SelectItem value="Completati">Completati</SelectItem>
                            <SelectItem value="Da completare">Da completare</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="task-sort-select" className="text-gray-700 font-medium">
                        Ordina per
                    </Label>
                    <Select onValueChange={handleSortChange} value={sort} id="task-sort-select">
                        <SelectTrigger className="focus:ring-blue-500 focus:border-blue-500">
                            <SelectValue placeholder="Seleziona ordinamento" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Data">Data (Più recenti)</SelectItem>
                            <SelectItem value="Alfabetico">Alfabetico (A-Z)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
}

