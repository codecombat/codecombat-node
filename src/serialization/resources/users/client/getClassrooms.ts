/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombat } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.users.getClassrooms.Response.Raw,
    CodeCombat.ClassroomResponseWithCode[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).ClassroomResponseWithCode)
);

export declare namespace Response {
    type Raw = serializers.ClassroomResponseWithCode.Raw[];
}
