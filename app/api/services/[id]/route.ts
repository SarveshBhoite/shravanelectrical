import { type NextRequest, NextResponse } from "next/server"

// Mock database - in production, this would connect to your actual database
const services = [
  {
    id: 1,
    title: "Solar Panel Installation",
    description: "Complete solar energy solutions for residential and commercial properties.",
    icon: "Sun",
    features: ["High-efficiency panels", "Battery backup", "25-year warranty"],
    price: "₹80,000 - ₹5,00,000",
    category: "Solar Solutions",
  },
]

// GET - Fetch single service
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    // Commented out database query for now
    // const service = await db.services.findUnique({
    //   where: { id }
    // })

    const service = services.find((s) => s.id === id)

    if (!service) {
      return NextResponse.json({ success: false, error: "Service not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: service,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch service" }, { status: 500 })
  }
}

// PUT - Update service
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const body = await request.json()

    // Commented out database update for now
    // const updatedService = await db.services.update({
    //   where: { id },
    //   data: body
    // })

    const serviceIndex = services.findIndex((s) => s.id === id)
    if (serviceIndex === -1) {
      return NextResponse.json({ success: false, error: "Service not found" }, { status: 404 })
    }

    services[serviceIndex] = { ...services[serviceIndex], ...body }

    return NextResponse.json({
      success: true,
      data: services[serviceIndex],
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update service" }, { status: 500 })
  }
}

// DELETE - Delete service
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    // Commented out database deletion for now
    // await db.services.delete({
    //   where: { id }
    // })

    const serviceIndex = services.findIndex((s) => s.id === id)
    if (serviceIndex === -1) {
      return NextResponse.json({ success: false, error: "Service not found" }, { status: 404 })
    }

    services.splice(serviceIndex, 1)

    return NextResponse.json({
      success: true,
      message: "Service deleted successfully",
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete service" }, { status: 500 })
  }
}
