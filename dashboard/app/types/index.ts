export enum Role {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  USER = "USER",
  GUEST = "GUEST",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  teamId?: string;
  team?: Team;
  createdAt: Date;
  updatedAT: Date;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  code: string;
  members: User[];
  createdAt: Date;
  updatedAt: Date;
}
