/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as CodeCombat from "../../../../../api";
import * as core from "../../../../../core";

export const ClansUpsertMemberRequest: core.serialization.Schema<
    serializers.ClansUpsertMemberRequest.Raw,
    CodeCombat.ClansUpsertMemberRequest
> = core.serialization.object({
    userId: core.serialization.string(),
});

export declare namespace ClansUpsertMemberRequest {
    interface Raw {
        userId: string;
    }
}