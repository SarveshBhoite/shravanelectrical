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
    image: "/blog1.jpeg?height=300&width=400",
  },
  {
    id: 2,
    name: "Industrial Electrical Wiring",
    category: "Electrical Installation",
    description: "Complete electrical wiring and panel installation for manufacturing facility.",
    location: "Mumbai, Maharashtra",
    completedDate: "2024-02-20",
    status: "completed",
    budget: "₹1,20,00,000",
    image: "/blog2.jpeg?height=300&width=400",
  },
]

// GET - Fetch all projects
export async function GET() {
  try {
    // Commented out database connection for now
    // const projects = await db.projects.findMany()

    return NextResponse.json({
      success: true,
      data: projects,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch projects" }, { status: 500 })
  }
}

// POST - Create new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, category, description, location, budget, status } = body
    if (!name || !category || !description || !location) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Commented out database insertion for now
    // const newProject = await db.projects.create({
    //   data: {
    //     name,
    //     category,
    //     description,
    //     location,
    //     budget,
    //     status: status || 'planned',
    //     completedDate: new Date().toISOString().split('T')[0]
    //   }
    // })

    // Mock creation
    const newProject = {
      id: Date.now(),
      name,
      category,
      description,
      location,
      budget: budget || "₹0",
      status: status || "planned",
      completedDate: new Date().toISOString().split("T")[0],
      image: "/blog3.jpeg?height=300&width=400",
    }

    projects.push(newProject)

    return NextResponse.json(
      {
        success: true,
        data: newProject,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create project" }, { status: 500 })
  }
}
