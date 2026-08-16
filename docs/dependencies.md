---
title: 依存関係
sidebar_position: 4
---

# ふんわり消灯ギミック 依存関係一覧

ふんわり消灯ギミックを利用するために必要な外部パッケージ・シェーダー・ツールの一覧です。
表中の「確認時バージョン」は **動作確認時に使用していたバージョン** です（[VerifiedVersions.md](verified-versions.md) 参照）。

---

## 必須（これがないと動きません）

| 依存 | 確認時バージョン | 入手先 / パス | 用途 |
|------|----------------|--------------|------|
| **Unity** | 2022.3 LTS | - | VRChat ワールド開発の標準 |
| **VRChat SDK - Worlds** | 3.10.1（最低 3.5.0） | `com.vrchat.worlds` | Udon / ワールド基盤。UdonSharp も同梱 |
| **VRC Light Volumes** | 2.1.3(3.x は未対応・未検証)（RED_SIM） | `red.sim.lightvolumes` | アバターなど動的オブジェクトの色味切り替え |

> VRC Light Volumes は `LightVolumeManager` / `LightVolumeInstance` / `LightVolumeSetup` を提供します。ふんわり消灯ギミックはこれらをエディタ側はリフレクション経由で参照します(ランタイムの LightmapChanger は型を直接参照するため、未導入のプロジェクトではコンパイルエラーになります)。

---

## スイッチを置く場合に必須

| 依存 | 入手先 | 用途 |
|------|--------|------|
| **LuraSwitch2**（QuickBrown Design Studio） | BOOTH 等で個別入手 | スライダー（Slider_Night）・スイッチ（Switch_Light）プレファブの土台 |

> 「スライダーを生成」「スイッチを生成」ボタンを使う場合のみ必要です。手動で別のスイッチ機構につなぐ場合は不要です。

---

## 対応シェーダー（参照型）

ふんわり消灯ギミックは「**参照型**」です。ベースシェーダー本体は配布物に含まれません。
**お使いのベースシェーダーは各自インストール**してください。インストールされていれば、変換ボタンで「消灯対応版（LightmapBlend）」が自動生成・適用されます。

| ベースシェーダー | 確認時バージョン | 検出するパス | 変換後のシェーダー名 |
|----------------|----------------|------------|--------------------|
| **lilPBR** | 1.0.0 | `Packages/jp.lilxyzw.lilpbr` | `Usuakari_koubou/lilPBR_LightmapBlend` |
| **Filamented** (Metallic) | 1.3.0 | `Packages/s-ilent.filamented` | `Usuakari_koubou/Filamented_LightmapBlend` |
| **Filamented** (Roughness setup) | 1.3.0 | 同上 | `Usuakari_koubou/Filamented_Roughness_LightmapBlend` |
| **Filamented** (Specular setup) | 1.3.0 | 同上 | `Usuakari_koubou/Filamented_Specular_LightmapBlend` |
| **Filamented** (Cloth setup) | 1.3.0 | 同上 | `Usuakari_koubou/Filamented_Cloth_LightmapBlend` |
| **Unity Standard** (Metallic) | Unity 内蔵 | （インストール不要） | `Usuakari_koubou/Standard_LightmapBlend` |
| **Unity Standard** (Specular setup) | Unity 内蔵 | （インストール不要） | `Usuakari_koubou/Standard_Specular_LightmapBlend` |
| **Mochie Standard** | `Assets/Mochie/Standard Shader` 配置版 | `Assets/Mochie/Standard Shader` | `Usuakari_koubou/Mochie_Standard_LightmapBlend` |
| **Mochie Standard Lite** | 同上 | `Assets/Mochie/Standard Shader` | `Usuakari_koubou/Mochie_StandardLite_LightmapBlend` |
| **Poiyomi Toon World** | 9.3.64 | `Packages/com.poiyomi.toon` | `Usuakari_koubou/Poiyomi_ToonWorld_LightmapBlend` |

### 変換元として認識されるシェーダー名（内部判定）

変換ボタンは、シーン内マテリアルのシェーダー名で対象を判定します。

| 内部のシェーダー名 | どのボタンで変換されるか |
|------------------|----------------------|
| `lilPBR` を含む名前（`LightmapBlend` を含まないもの） | lilPBR → LightmapBlend |
| `Silent/Filamented` | Filamented → LightmapBlend |
| `Silent/Filamented (Roughness setup)` | 同上 |
| `Silent/Filamented (Specular setup)` | 同上 |
| `Silent/Filamented (Cloth setup)` | 同上 |
| `Standard` | Standard → LightmapBlend |
| `Standard (Specular setup)` | 同上 |
| `Mochie/Standard` | Mochie Standard → LightmapBlend |
| `Mochie/Standard Lite` | Mochie Standard Lite → LightmapBlend |
| `.poiyomi/Poiyomi Toon World` | Poiyomi Toon World → LightmapBlend |

---

## Poiyomi に関する注意（動的パッチ方式）

Poiyomi だけは他と仕組みが異なります。
ふんわり消灯ギミックは **インストールされている Poiyomi 本体のソースに文字列挿入してパッチ版を生成**します（`Packages/com.poiyomi.toon/_PoiyomiShaders/Shaders/<バージョン>/Toon/Poiyomi Toon World.shader` を読み込み）。

- **Poiyomi のバージョンが変わると注入点が見つからずパッチに失敗する**可能性があります
- 9.x 系で複数の注入候補パターンを持たせて互換性を確保していますが、確実なのは **確認時の 9.3.64 付近**です
- Poiyomi アップデート後に挙動がおかしくなった場合は、メインウィンドウの「**Poiyomi LightmapBlend シェーダーを再生成**」ボタンで作り直してください
- **ふんわり消灯ギミック本体をアップデートしたときも、同じボタンで再生成してください**。生成済みシェーダーは自動では更新されないため、古いまま使うと本体の変更が Poiyomi を使用した面にだけ反映されないことがあります
- 生成に失敗した場合、エラーダイアログに Poiyomi のバージョン番号が表示されます

> 配布物には Poiyomi の生成済みシェーダーは含まれません（Poiyomi 本体ソースを含むため）。Poiyomi マテリアルを変換すると、お使いの環境の Poiyomi から自動生成されます。

---

## 任意（あると便利）

| 依存 | 用途 |
|------|------|
| **Bakery GPU Lightmapper** | 高品質なライトマップベイク。なくても Unity 標準ライトマッパーで動作。使用時は **Dominant Direction** または **Half** モードのみ対応（RNM / SH / MonoSH は未対応） |

---

## 関連

- [QuickStart.md](quickstart.md) — セットアップ手順
- [Settings.md](settings.md) — コンポーネント設定ガイド
- [VerifiedVersions.md](verified-versions.md) — 動作確認バージョン

---

## 外部ライトマッパー（任意）

> **Light Volume との併用について**: 外部ライトマッパーから Light Volume をベイクするには
> VRC Light Volumes 3.0.0 以上が必要とされます。本ツールで動作確認済みなのは 2.1.3 のみのため、
> Light Volume を使う場合はライトマッパーに Bakery か Unity 標準を選んでください。


「ベイク」ステップで「外部ツール（Hikari など・手動）」を選ぶと、ベイクの実行だけを他のライトマッパーに任せられます。

- 対象ツール本体は**各自で購入・導入**してください。本パッケージには含まれません
- Hikari Lightmapper が導入されている場合は、待機中に「Hikari のウィンドウを開く」が表示されます（ウィンドウを開くだけです）
- ベイクの開始と完了の確認は手動になります。通しの実行は使えません
