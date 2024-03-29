/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as CodeCombat from "../../api";
import * as core from "../../core";

export const UserResponseOAuthIdentitiesItem: core.serialization.ObjectSchema<
    serializers.UserResponseOAuthIdentitiesItem.Raw,
    CodeCombat.UserResponseOAuthIdentitiesItem
> = core.serialization.object({
    provider: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
});

export declare namespace UserResponseOAuthIdentitiesItem {
    interface Raw {
        provider?: string | null;
        id?: string | null;
    }
}
