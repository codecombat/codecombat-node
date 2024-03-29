/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as CodeCombat from "../../api";
import * as core from "../../core";

export const ClassroomResponse: core.serialization.ObjectSchema<
    serializers.ClassroomResponse.Raw,
    CodeCombat.ClassroomResponse
> = core.serialization.object({
    id: core.serialization.property(
        "_id",
        core.serialization.lazy(async () => (await import("..")).ObjectIdString).optional()
    ),
    name: core.serialization.string().optional(),
    members: core.serialization
        .list(core.serialization.lazy(async () => (await import("..")).ObjectIdString))
        .optional(),
    ownerId: core.serialization.property(
        "ownerID",
        core.serialization.lazy(async () => (await import("..")).ObjectIdString).optional()
    ),
    description: core.serialization.string().optional(),
    courses: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ClassroomResponseCoursesItem))
        .optional(),
});

export declare namespace ClassroomResponse {
    interface Raw {
        _id?: serializers.ObjectIdString.Raw | null;
        name?: string | null;
        members?: serializers.ObjectIdString.Raw[] | null;
        ownerID?: serializers.ObjectIdString.Raw | null;
        description?: string | null;
        courses?: serializers.ClassroomResponseCoursesItem.Raw[] | null;
    }
}
