export interface Avis {
  id?: number;
  nom: string;
  prenom: string;
  entreprise?: string;
  note: number; // 1-5
  commentaire: string;
  dateCreation?: Date;
  approuve?: boolean;
}

export interface AvisFormData {
  nom: string;
  prenom: string;
  entreprise?: string;
  note: number;
  commentaire: string;
}

