/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CodeCombat from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.classrooms.getMembersStats.Response.Raw,
    CodeCombat.ClassroomsGetMembersStatsResponseItem[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).ClassroomsGetMembersStatsResponseItem)
);

export declare namespace Response {
    type Raw = serializers.ClassroomsGetMembersStatsResponseItem.Raw[];
}
