import { type NextRequest, NextResponse } from "next/server"

// Mock database - in production, this would connect to your actual database
const services = [
  {
    id: 1,
    title: "Solar Panel Installation",
    description:
      "Complete solar energy solutions for residential and commercial properties with high-efficiency panels and battery backup systems.",
    icon: "Sun",
    features: [
      "High-efficiency solar panels",
      "Battery backup systems",
      "Grid-tie inverters",
      "Monitoring systems",
      "25-year warranty",
    ],
    price: "₹80,000 - ₹5,00,000",
    category: "Solar Solutions",
  },
  {
    id: 2,
    title: "Electrical Wiring & Installation",
    description:
      "Professional electrical wiring services for new constructions and renovations with safety compliance.",
    icon: "Zap",
    features: [
      "Complete house wiring",
      "Panel installations",
      "Safety inspections",
      "Code compliance",
      "Emergency repairs",
    ],
    price: "₹15,000 - ₹2,00,000",
    category: "Electrical Services",
  },
]

// GET - Fetch all services
export async function GET() {
  try {
    // Commented out database connection for now
    // const services = await db.services.findMany()

    return NextResponse.json({
      success: true,
      data: services,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch services" }, { status: 500 })
  }
}

// POST - Create new service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { title, description, features, category } = body
    if (!title || !description || !features || !category) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Commented out database insertion for now
    // const newService = await db.services.create({
    //   data: body
    // })

    // Mock creation
    const newService = {
      id: Date.now(),
      ...body,
      icon: "Wrench", // Default icon
    }

    services.push(newService)

    return NextResponse.json(
      {
        success: true,
        data: newService,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create service" }, { status: 500 })
  }
}
