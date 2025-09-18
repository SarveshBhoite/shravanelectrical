"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Plus,
  Edit,
  Trash2,
  Search,
  BarChart3,
  Users,
  FolderOpen,
  MessageSquare,
  Settings,
  Eye,
  Calendar,
  MapPin,
  IndianRupee,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Upload,
  RefreshCw,
} from "lucide-react"
import { mockProjects, mockServices } from "@/lib/mock-data"

interface Project {
  id: number
  name: string
  category: string
  description: string
  location: string
  completedDate: string
  status: "completed" | "in-progress" | "planned"
  budget: string
}

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>(
    mockProjects.map((p) => ({
      ...p,
      status: "completed" as const,
      budget: "₹50,00,000",
    })),
  )

  const [services, setServices] = useState<Service[]>(mockServices)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  const [newProject, setNewProject] = useState({
    name: "",
    category: "",
    description: "",
    location: "",
    completedDate: "",
    status: "planned" as const,
    budget: "",
  })

  const handleAddProject = () => {
    const project: Project = {
      id: Date.now(),
      ...newProject,
    }
    setProjects([...projects, project])
    setNewProject({
      name: "",
      category: "",
      description: "",
      location: "",
      completedDate: "",
      status: "planned",
      budget: "",
    })
    setShowAddForm(false)
  }

  const handleEditProject = (project: Project) => {
    setSelectedProject(project)
    setIsEditing(true)
  }

  const handleUpdateProject = () => {
    if (selectedProject) {
      setProjects(projects.map((p) => (p.id === selectedProject.id ? selectedProject : p)))
      setSelectedProject(null)
      setIsEditing(false)
    }
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "planned":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Manage your projects, services, and business operations
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
                <Plus className="mr-2 h-4 w-4" />
                Quick Add
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">Total Projects</p>
                  <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{projects.length}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 flex items-center mt-2">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% from last month
                  </p>
                </div>
                <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                  <FolderOpen className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/10 rounded-full -mr-10 -mt-10"></div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">Completed</p>
                  <p className="text-3xl font-bold text-green-900 dark:text-green-100">
                    {projects.filter((p) => p.status === "completed").length}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-2">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    85% success rate
                  </p>
                </div>
                <div className="p-3 bg-green-600 rounded-xl shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600/10 rounded-full -mr-10 -mt-10"></div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-1">In Progress</p>
                  <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">
                    {projects.filter((p) => p.status === "in-progress").length}
                  </p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400 flex items-center mt-2">
                    <Activity className="h-3 w-3 mr-1" />
                    On schedule
                  </p>
                </div>
                <div className="p-3 bg-yellow-600 rounded-xl shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-600/10 rounded-full -mr-10 -mt-10"></div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700 dark:text-purple-300 mb-1">Services</p>
                  <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">{services.length}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 flex items-center mt-2">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Active offerings
                  </p>
                </div>
                <div className="p-3 bg-purple-600 rounded-xl shadow-lg">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600/10 rounded-full -mr-10 -mt-10"></div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white dark:bg-slate-800 shadow-lg rounded-xl p-1">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white rounded-lg font-medium"
            >
              Projects Management
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white rounded-lg font-medium"
            >
              Services Management
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white rounded-lg font-medium"
            >
              Analytics & Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <Card className="shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-700">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                      Projects Management
                    </CardTitle>
                    <p className="text-blue-700 dark:text-blue-300 mt-1">
                      Manage and track all your electrical projects
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Import
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Project
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold">Add New Project</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="font-medium">
                                Project Name
                              </Label>
                              <Input
                                id="name"
                                value={newProject.name}
                                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                                placeholder="Enter project name"
                                className="border-slate-300 focus:border-blue-500"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="category" className="font-medium">
                                Category
                              </Label>
                              <Select
                                value={newProject.category}
                                onValueChange={(value) => setNewProject({ ...newProject, category: value })}
                              >
                                <SelectTrigger className="border-slate-300 focus:border-blue-500">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Solar Installation">Solar Installation</SelectItem>
                                  <SelectItem value="Electrical Installation">Electrical Installation</SelectItem>
                                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                                  <SelectItem value="Transformer Setup">Transformer Setup</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="description" className="font-medium">
                              Description
                            </Label>
                            <Textarea
                              id="description"
                              value={newProject.description}
                              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                              placeholder="Project description"
                              rows={3}
                              className="border-slate-300 focus:border-blue-500"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="location" className="font-medium">
                                Location
                              </Label>
                              <Input
                                id="location"
                                value={newProject.location}
                                onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                                placeholder="Project location"
                                className="border-slate-300 focus:border-blue-500"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="budget" className="font-medium">
                                Budget
                              </Label>
                              <Input
                                id="budget"
                                value={newProject.budget}
                                onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
                                placeholder="₹50,00,000"
                                className="border-slate-300 focus:border-blue-500"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="status" className="font-medium">
                              Status
                            </Label>
                            <Select
                              value={newProject.status}
                              onValueChange={(value: "planned" | "in-progress" | "completed") =>
                                setNewProject({ ...newProject, status: value })
                              }
                            >
                              <SelectTrigger className="border-slate-300 focus:border-blue-500">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="planned">Planned</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <Separator />

                          <div className="flex justify-end gap-3">
                            <Button variant="outline">Cancel</Button>
                            <Button
                              onClick={handleAddProject}
                              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                            >
                              Create Project
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      placeholder="Search projects by name, category, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-slate-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="planned">Planned</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <Card
                      key={project.id}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <Badge className={`${getStatusColor(project.status)} font-medium px-3 py-1`}>
                            {project.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                            {project.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                            {project.status === "planned" && <AlertCircle className="h-3 w-3 mr-1" />}
                            {project.status.replace("-", " ")}
                          </Badge>
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="sm" variant="ghost" onClick={() => handleEditProject(project)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => handleDeleteProject(project.id)}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </div>

                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100 line-clamp-2">
                          {project.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Badge variant="outline" className="mr-2">
                              {project.category}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                            {project.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <IndianRupee className="h-4 w-4 mr-2 text-slate-400" />
                            {project.budget}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                            {project.completedDate}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Services Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <Card key={service.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-semibold text-lg">{service.title}</h3>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Features:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                    Project Status Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        status: "Completed",
                        count: projects.filter((p) => p.status === "completed").length,
                        color: "bg-green-500",
                      },
                      {
                        status: "In Progress",
                        count: projects.filter((p) => p.status === "in-progress").length,
                        color: "bg-yellow-500",
                      },
                      {
                        status: "Planned",
                        count: projects.filter((p) => p.status === "planned").length,
                        color: "bg-blue-500",
                      },
                    ].map((item) => (
                      <div
                        key={item.status}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800"
                      >
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                          <span className="font-medium">{item.status}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold text-lg mr-2">{item.count}</span>
                          <span className="text-sm text-slate-500">
                            {projects.length > 0 ? Math.round((item.count / projects.length) * 100) : 0}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64">
                    <div className="space-y-4">
                      {[
                        {
                          action: "Project completed",
                          project: "Solar Installation",
                          time: "2 hours ago",
                          icon: CheckCircle,
                          color: "text-green-600",
                        },
                        {
                          action: "New project added",
                          project: "Transformer Setup",
                          time: "5 hours ago",
                          icon: Plus,
                          color: "text-blue-600",
                        },
                        {
                          action: "Service updated",
                          project: "Cable Installation",
                          time: "1 day ago",
                          icon: Edit,
                          color: "text-yellow-600",
                        },
                        {
                          action: "Project started",
                          project: "Industrial Wiring",
                          time: "2 days ago",
                          icon: Activity,
                          color: "text-purple-600",
                        },
                      ].map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <activity.icon className={`h-5 w-5 mt-0.5 ${activity.color}`} />
                          <div className="flex-1">
                            <p className="font-medium text-slate-900 dark:text-slate-100">{activity.action}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{activity.project}</p>
                            <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-600 rounded-full w-fit mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-blue-900 dark:text-blue-100">₹2.5Cr</h3>
                  <p className="text-blue-700 dark:text-blue-300 font-medium">Total Revenue</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">+15% from last quarter</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-600 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-green-900 dark:text-green-100">150+</h3>
                  <p className="text-green-700 dark:text-green-300 font-medium">Happy Clients</p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">98% satisfaction rate</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-600 rounded-full w-fit mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-purple-900 dark:text-purple-100">24/7</h3>
                  <p className="text-purple-700 dark:text-purple-300 font-medium">Support Available</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">Emergency services</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
