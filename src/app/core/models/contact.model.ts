export interface Contact {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  entreprise?: string;
  sujet: string;
  message: string;
  dateCreation?: Date;
}

export interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  entreprise?: string;
  sujet: string;
  message: string;
}

