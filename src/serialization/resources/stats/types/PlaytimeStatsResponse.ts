/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CodecombatApi } from "@fern-api/codecombat";
import * as core from "../../../../core";

export const PlaytimeStatsResponse: core.serialization.ObjectSchema<
    serializers.PlaytimeStatsResponse.Raw,
    CodecombatApi.PlaytimeStatsResponse
> = core.serialization.object({
    playTime: core.serialization.number().optional(),
    gamesPlayed: core.serialization.number().optional(),
});

export declare namespace PlaytimeStatsResponse {
    interface Raw {
        playTime?: number | null;
        gamesPlayed?: number | null;
    }
}