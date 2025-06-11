import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList } from "lucide-react"
import TaskItem from "@/components/homepage/tasks/task-items";

export default function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
    if (!tasks || tasks.length === 0) {
        return (
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-sky-700">
                        <ClipboardList className="w-5 h-5" />
                        Elenco Attività
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-500 text-center py-8">Nessuna attività da visualizzare. Prova ad aggiungerne una!</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-sky-700">
                    <ClipboardList className="w-5 h-5" />
                    Elenco Attività ({tasks.length})
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} onDeleteTask={onDeleteTask} />
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
