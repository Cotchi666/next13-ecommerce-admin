import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true
    },
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    }
  });

  const totalRevenue = paidOrders.reduce((total: any, order: { orderItems: any[]; }) => {
    const orderTotal = order.orderItems.reduce((orderSum: any, item: any) => {
      return orderSum + orderSum
    }, 0);
    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
