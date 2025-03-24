import prisma from '@/prisma/prisma'

export const getAddressesByUserId = async (id: number) => {
    const addresses = await prisma.users_addresses.findMany({ where: { user_id: id } })
    return addresses
}