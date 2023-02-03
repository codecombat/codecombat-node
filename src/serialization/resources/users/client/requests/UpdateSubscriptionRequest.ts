/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { CodeCombat } from "@fern-api/codecombat";
import * as core from "../../../../../core";

export const UpdateSubscriptionRequest: core.serialization.Schema<
    serializers.UpdateSubscriptionRequest.Raw,
    CodeCombat.UpdateSubscriptionRequest
> = core.serialization.object({
    ends: core.serialization.date(),
});

export declare namespace UpdateSubscriptionRequest {
    interface Raw {
        ends: string;
    }
}
