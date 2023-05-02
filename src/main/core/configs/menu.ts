import { MenuItemInterface } from '@frontend/types/menu';

export const ADMIN_MENUS: MenuItemInterface[] = [
  {
    id: 0,
    href: '/admin/dashboard',
    title: 'Dashboard'
  },
  {
    id: 1,
    href: '/admin/posts',
    title: 'Posts'
  },
  {
    id: 2,
    href: '/admin/pages',
    title: 'Pages'
  },
  {
    id: 3,
    href: '/admin/users',
    title: 'Users'
  }
]


export const USER_MENUS: MenuItemInterface[] = [
  {
    id: 0,
    title: 'Artikel',
    href: '/articles'
  },
  {
    id: 1,
    title: 'Loker',
    href: '/jobs'
  },
  {
    id: 2,
    title: 'Proyek',
    href: '/projects'
  },
  {
    id: 3,
    title: 'Kontak',
    href: '/contact'
  }
]