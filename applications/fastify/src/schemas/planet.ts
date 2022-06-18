import { Type } from "@sinclair/typebox";

export const planetSchema = Type.Object(
    {
        name: Type.String(),
        description: Type.Optional(Type.String()),
        diameter: Type.Integer(),
        moons: Type.Integer(),
    },
    { additionalProperties: false }
);

export const planetIdSchema = Type.Object({ id: Type.Number() });
