export interface StaffDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  profileImage: string;
  emailSignature: string;
  admin: boolean;
  roleDto: RoleDTO;
}

export interface RoleDTO {
  // Propriétés de RoleDTO à définir ici
}
