export interface ProjectResponse {
    _id: string;
    name: string;
    description: string;
    id: string;
    userId: string;
    updatedAt: number;
    createdAt: number;
    imageUrl: string;
    access: "PRIVATE" | "PUBLIC";
}
