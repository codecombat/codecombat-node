/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { CodecombatApi } from "@fern-api/codecombat";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.CodecombatApiEnvironment | string;
        credentials?: core.Supplier<core.BasicAuth>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Upserts a user into the clan.
     */
    public async put(handle: string, request: CodecombatApi.ClanRequest): Promise<CodecombatApi.ClanResponse> {
        const _queryParams = new URLSearchParams();
        _queryParams.append("handle", request.handle);
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CodecombatApiEnvironment.Production,
                `/clan/${handle}/members`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
            body: await serializers.clans.put.Request.json({
                userId: request.userId,
            }),
        });
        if (_response.ok) {
            return await serializers.clans.put.Response.parse(_response.body as serializers.clans.put.Response.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodecombatApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodecombatApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodecombatApiTimeoutError();
            case "unknown":
                throw new errors.CodecombatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}