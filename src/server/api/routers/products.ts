import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  // get: publicProcedure.input(z.object({ listingId : z.string()})).query(({ctx, input}) => {
  //   return ctx.prisma.product.findUnique({
  //     where: {
  //       id: input.listingId
  //     }
  //   })
  // }),
    list: publicProcedure.query(({ctx}) => {
      return ctx.prisma.product.findMany()
    }),
});
