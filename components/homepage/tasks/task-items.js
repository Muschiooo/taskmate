"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, Trash2, CalendarDays } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function TaskItem({ task, onToggleComplete, onDeleteTask }) {
    const cardClasses = task.completed ? "bg-green-100 border-green-500 shadow-md" : "bg-white shadow-md"

    const titleClasses = task.completed ? "line-through text-gray-500" : "text-gray-800"

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }
        return new Date(dateString).toLocaleDateString("it-IT", options)
    }

    return (
        <Card className={cardClasses}>
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <CardTitle className={`text-xl font-semibold ${titleClasses}`}>{task.title}</CardTitle>
                    {task.completed ? (
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-green-500">
                            <CheckCircle2 className="mr-1 h-4 w-4" /> Completato
                        </Badge>
                    ) : (
                        <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-500">
                            <Circle className="mr-1 h-4 w-4" /> Da Fare
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent className="pb-4">
                {task.description && (
                    <p className={`text-sm ${task.completed ? "text-gray-400" : "text-gray-600"}`}>{task.description}</p>
                )}
                <div className="text-xs text-gray-400 mt-2 flex items-center">
                    <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                    Aggiunto il: {formatDate(task.date)}
                </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 pt-4 border-t border-gray-200">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onToggleComplete(task.id)}
                    className={`transition-colors ${
                        task.completed
                            ? "text-orange-500 border-orange-500 hover:bg-orange-100 hover:text-orange-700"
                            : "text-green-500 border-green-500 hover:bg-green-100 hover:text-green-700"
                    }`}
                >
                    {task.completed ? <Circle className="mr-2 h-4 w-4" /> : <CheckCircle2 className="mr-2 h-4 w-4" />}
                    {task.completed ? "Segna da Fare" : "Segna Completato"}
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDeleteTask(task.id)}
                    className="text-red-500 border-red-500 hover:bg-red-100 hover:text-red-600"
                >
                    <Trash2 className="mr-2 h-4 w-4" /> Elimina
                </Button>
            </CardFooter>
        </Card>
    )
}
