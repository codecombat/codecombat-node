/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodeCombat } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const MemberStat: core.serialization.ObjectSchema<serializers.MemberStat.Raw, CodeCombat.MemberStat> =
    core.serialization.object({
        id: core.serialization.property(
            "_id",
            core.serialization.lazy(async () => (await import("../../..")).ObjectIdString).optional()
        ),
        stats: core.serialization.lazyObject(async () => (await import("../../..")).PlayStats).optional(),
    });

export declare namespace MemberStat {
    interface Raw {
        _id?: serializers.ObjectIdString.Raw | null;
        stats?: serializers.PlayStats.Raw | null;
    }
}
