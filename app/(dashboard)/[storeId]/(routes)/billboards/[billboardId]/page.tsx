import prismadb from "@/lib/prismadb";

import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  let billboard: any;

  try {
    if (params.billboardId.length > 4) {
      billboard = await prismadb.billboard.findUnique({
        where: {
          id: params.billboardId,
        },
      });
    } else {
    }
  } catch (error) {}

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
