import prisma from '@/prisma/prisma'

export const getUsers = () => {
    const users = prisma.users.findMany()
    return users
}