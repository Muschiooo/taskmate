"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"

export default function AddTaskForm({ onAddTask }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) {
            setError("Il titolo è obbligatorio.")
            return
        }
        setError("")
        onAddTask({ title, description, completed: false })
        setTitle("")
        setDescription("")
    }

    return (
        <Card className="shadow-lg bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-indigo-500">
                    <PlusCircle className="w-6 h-6 text-purple-600" />
                    Aggiungi Nuova Attività
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-gray-700 font-medium">
                            Titolo Attività
                        </Label>
                        <Input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Es. Fare la spesa"
                            className="focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-gray-700 font-medium">
                            Descrizione (Opzionale)
                        </Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Es. Comprare latte, uova, pane..."
                            className="focus:ring-indigo-500 focus:border-indigo-500"
                            rows={3}
                        />
                    </div>
                </CardContent>
                <CardFooter className="mt-4">
                    <Button type="submit" className="w-full sm:w-auto bg-green-500 hover:bg-emerald-600">
                        <PlusCircle className="mr-2 h-4 w-4 text-white/80" /> Aggiungi Attività
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
