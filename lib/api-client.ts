// API client for admin dashboard - commented out for now
// Uncomment when ready to connect to real APIs

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
  price?: string
  category?: string
}

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

class ApiClient {
  private baseUrl = "/api"

  // Projects API methods
  async getProjects(): Promise<ApiResponse<Project[]>> {
    try {
      // Commented out for now - uncomment when ready to use real APIs
      // const response = await fetch(`${this.baseUrl}/projects`)
      // const data = await response.json()
      // return data

      // Mock response for now
      return {
        success: true,
        data: [],
      }
    } catch (error) {
      return {
        success: false,
        error: "Failed to fetch projects",
      }
    }
  }

  async createProject(project: Omit<Project, "id">): Promise<ApiResponse<Project>> {
    try {
      // Commented out for now - uncomment when ready to use real APIs
      // const response = await fetch(`${this.baseUrl}/projects`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(project),
      // })
      // const data = await response.json()
      // return data

      // Mock response for now
      return {
        success: true,
        data: { id: Date.now(), ...project },
      }
    } catch (error) {
      return {
        success: false,
        error: "Failed to create project",
      }
    }
  }

  async updateProject(id: number, project: Partial<Project>): Promise<ApiResponse<Project>> {
    try {
      // Commented out for now - uncomment when ready to use real APIs
      // const response = await fetch(`${this.baseUrl}/projects/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(project),
      // })
      // const data = await response.json()
      // return data

      // Mock response for now
      return {
        success: true,
        data: { id, ...project } as Project,
      }
    } catch (error) {
      return {
        success: false,
        error: "Failed to update project",
      }
    }
  }

  async deleteProject(id: number): Promise<ApiResponse<void>> {
    try {
      // Commented out for now - uncomment when ready to use real APIs
      // const response = await fetch(`${this.baseUrl}/projects/${id}`, {
      //   method: 'DELETE',
      // })
      // const data = await response.json()
      // return data

      // Mock response for now
      return {
        success: true,
      }
    } catch (error) {
      return {
        success: false,
        error: "Failed to delete project",
      }
    }
  }

  // Services API methods
  async getServices(): Promise<ApiResponse<Service[]>> {
    try {
      // Commented out for now - uncomment when ready to use real APIs
      // const response = await fetch(`${this.baseUrl}/services`)
      // const data = await response.json()
      // return data

      // Mock response for now
      return {
        success: true,
        data: [],
      }
    } catch (error) {
      return {
        success: false,
        error: "Failed to fetch services",
      }
    }
  }

  async createService(service: Omit<Service, "id">): Promise<ApiResponse<Service>> {
    try {
      // Commented out for now - uncomment when ready to use real APIs
      // const response = await fetch(`${this.baseUrl}/services`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(service),
      // })
      // const data = await response.json()
      // return data

      // Mock response for now
      return {
        success: true,
        data: { id: Date.now(), ...service },
      }
    } catch (error) {
      return {
        success: false,
        error: "Failed to create service",
      }
    }
  }

  async updateService(id: number, service: Partial<Service>): Promise<ApiResponse<Service>> {
    try {
      // Commented out for now - uncomment when ready to use real APIs
      // const response = await fetch(`${this.baseUrl}/services/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(service),
      // })
      // const data = await response.json()
      // return data

      // Mock response for now
      return {
        success: true,
        data: { id, ...service } as Service,
      }
    } catch (error) {
      return {
        success: false,
        error: "Failed to update service",
      }
    }
  }

  async deleteService(id: number): Promise<ApiResponse<void>> {
    try {
      // Commented out for now - uncomment when ready to use real APIs
      // const response = await fetch(`${this.baseUrl}/services/${id}`, {
      //   method: 'DELETE',
      // })
      // const data = await response.json()
      // return data

      // Mock response for now
      return {
        success: true,
      }
    } catch (error) {
      return {
        success: false,
        error: "Failed to delete service",
      }
    }
  }
}

export const apiClient = new ApiClient()
export type { Project, Service, ApiResponse }
