import prisma from '@/prisma/prisma'

export const getAddressesByUserId = async id => {
    const addresses = await prisma.users_addresses.findMany({where: { user_id: parseInt(id) }})
    return addresses
}