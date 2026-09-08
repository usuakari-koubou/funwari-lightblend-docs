---
title: 動作確認済み環境
sidebar_position: 7
---

# 動作確認済み環境

v1.6.0 は次の環境で、ベイク一式（消灯・点灯の両側とライトプローブ / Light Volume）と
切り替え動作を実機確認しています。v1.7.0 はエディタ上の確認までで、通しベイクでの確認は
まだ行っていません。

| 項目 | 確認バージョン |
|---|---|
| Unity | 2022.3 LTS (2022.3.22f1) |
| VRChat SDK - Worlds | 3.10.5 |
| VRC Light Volumes | 2.1.3 （**3.x は未対応・未検証**） |
| Bakery GPU Lightmapper | あり（Dominant Direction / Half） |
| Unity 標準ライトマッパー | あり（Progressive） |
| lilPBR | 1.0.0 |
| Filamented | 1.4.0（1.3.0 以前は不可） |
| Mochie's Unity Shaders | v1.76（Standard v2.13） |
| Poiyomi Toon (World) | 9.3.64（動的パッチのため導入版に追従） |

動作確認は **PC (Windows / DirectX 11) のみ**で行っています。
**Quest (Android) は未検証・未対応です**。対応シェーダーの多くがモバイル向けの
シェーダーモデルを超えているため、Quest ワールドでの利用は想定していません。

ここに無いバージョンでも動作する可能性はありますが、確認は取れていません。
不具合を見つけた場合は、環境のバージョンを添えて BOOTH のメッセージからお知らせください。

依存の入手先と配置場所は[依存関係](dependencies.md)をご覧ください。
