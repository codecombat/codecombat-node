/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CodeCombat from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Stats {
    interface Options {
        environment?: core.Supplier<environments.CodeCombatEnvironment | string>;
        username: core.Supplier<string>;
        password: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Stats {
    constructor(protected readonly _options: Stats.Options) {}

    /**
     * Returns the playtime stats
     */
    public async getPlaytimeStats(
        request: CodeCombat.StatsGetPlaytimeStatsRequest = {},
        requestOptions?: Stats.RequestOptions
    ): Promise<CodeCombat.PlaytimeStatsResponse> {
        const { startDate, endDate, country } = request;
        const _queryParams = new URLSearchParams();
        if (startDate != null) {
            _queryParams.append("startDate", startDate);
        }

        if (endDate != null) {
            _queryParams.append("endDate", endDate);
        }

        if (country != null) {
            _queryParams.append("country", country);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                "playtime-stats"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.8",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.PlaytimeStatsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns the license stats
     */
    public async getLicenseStats(requestOptions?: Stats.RequestOptions): Promise<CodeCombat.LicenseStatsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CodeCombatEnvironment.Default,
                "license-stats"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/codecombat",
                "X-Fern-SDK-Version": "0.1.8",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.LicenseStatsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CodeCombatError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CodeCombatError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CodeCombatTimeoutError();
            case "unknown":
                throw new errors.CodeCombatError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return core.BasicAuth.toAuthorizationHeader({
            username: await core.Supplier.get(this._options.username),
            password: await core.Supplier.get(this._options.password),
        });
    }
}
