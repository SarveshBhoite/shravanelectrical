import { type NextRequest, NextResponse } from "next/server"

// Mock database - in production, this would connect to your actual database
const projects = [
  {
    id: 1,
    name: "Solar Panel Installation - Residential Complex",
    category: "Solar Installation",
    description: "Complete solar panel installation for 50-unit residential complex with battery backup system.",
    location: "Pune, Maharashtra",
    completedDate: "2024-01-15",
    status: "completed",
    budget: "₹75,00,000",
    image: "/blog4.jpeg?height=300&width=400",
  },
]

// GET - Fetch single project
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    // Commented out database query for now
    // const project = await db.projects.findUnique({
    //   where: { id }
    // })

    const project = projects.find((p) => p.id === id)

    if (!project) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: project,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch project" }, { status: 500 })
  }
}

// PUT - Update project
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const body = await request.json()

    // Commented out database update for now
    // const updatedProject = await db.projects.update({
    //   where: { id },
    //   data: body
    // })

    const projectIndex = projects.findIndex((p) => p.id === id)
    if (projectIndex === -1) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 })
    }

    projects[projectIndex] = { ...projects[projectIndex], ...body }

    return NextResponse.json({
      success: true,
      data: projects[projectIndex],
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update project" }, { status: 500 })
  }
}

// DELETE - Delete project
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    // Commented out database deletion for now
    // await db.projects.delete({
    //   where: { id }
    // })

    const projectIndex = projects.findIndex((p) => p.id === id)
    if (projectIndex === -1) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 })
    }

    projects.splice(projectIndex, 1)

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully",
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete project" }, { status: 500 })
  }
}
