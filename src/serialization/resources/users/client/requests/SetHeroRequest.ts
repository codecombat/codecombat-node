/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { CodeCombatApi } from "@fern-api/codecombat";
import * as core from "../../../../../core";

export const SetHeroRequest: core.serialization.Schema<serializers.SetHeroRequest.Raw, CodeCombatApi.SetHeroRequest> =
    core.serialization.object({
        thangType: core.serialization.lazy(async () => (await import("../../../..")).ObjectId).optional(),
    });

export declare namespace SetHeroRequest {
    interface Raw {
        thangType?: serializers.ObjectId.Raw | null;
    }
}