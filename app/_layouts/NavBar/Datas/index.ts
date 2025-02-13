import {
  CREATE_OFFER_PAGE,
  DASHBORD_OFFER_PAGE,
  OFFERS_PAGE,
  PROFILE_PAGE
} from '@/_datas/constants/pages'

type NavBar = { title: string; href: string }
export type NavBarMenu = { title: string; menu: NavBar[] }

export const navBarFreelanceData: NavBar[] = [
  {
    title: ' Les Offres',
    href: OFFERS_PAGE
  },
  {
    title: 'Mon Profil',
    href: PROFILE_PAGE
  }
]

export const navBarCompanyData: NavBarMenu[] = [
  {
    title: ' Freelance',
    menu: [
      {
        title: 'Déposer une offre',
        href: CREATE_OFFER_PAGE
      },
      {
        title: 'Consulter les réponses',
        href: DASHBORD_OFFER_PAGE
      }
    ]
  },
  {
    title: 'Entreprise',
    menu: [
      {
        title: 'Déposer une offre',
        href: CREATE_OFFER_PAGE
      },
      {
        title: 'Consulter les réponses',
        href: DASHBORD_OFFER_PAGE
      },
      {
        title: 'Répondre à une offre',
        href: OFFERS_PAGE
      }
    ]
  }
]
