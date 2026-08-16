---
title: 利用規約・ライセンス
sidebar_position: 7
---

# License

## ふんわり消灯ギミック (Funwari_LightBlend) 利用規約

Copyright (c) 2024-2026 うすあかり工房 (usuakari_koubou)

この規約は、購入者の制作を妨げないことを第一に考えて書いています。
制限しているのは、ツールそのものが購入者以外の手に渡ることだけです。
作ったものをどう見せるか、どう売るかについては、制限をかけていません。

### 適用範囲

本規約は、うすあかり工房が制作した部分と、本配布物をひとまとまりの製品として
扱うこと（複製・頒布・利用の条件）に適用されます。

Shaders 配下には、ベースシェーダーを改変した派生ファイルが含まれます
（詳細は後述「本配布物に含まれる第三者著作物について」）。これらのファイルには、
うすあかり工房の改変部分と、ベースシェーダー由来の部分が併存します。
改変部分の著作権はうすあかり工房に帰属し、本規約が適用されます。
ベースシェーダー由来の部分には各第三者ライセンスが引き続き適用され、
**それらのライセンスが利用者へ与える権利を、本規約が狭めることはありません。**
後掲の「第三者ライセンス全文」は、その通知として掲載しています。

各ベースシェーダーのオリジナルは、それぞれの配布元から誰でも取得できます。
そちらには元のライセンスがそのまま適用されます。

### 用語

- **購入者**: BOOTH において本ツールを購入したアカウントの保有者
- **ツール本体**: 本配布物に含まれるファイル、およびそれを元に生成されたファイル
  （マテリアル変換で生成される `Usuakari_koubou/*_LightmapBlend` シェーダーを含む）
- **実行時ファイル**: `Shaders` / `Scripts` / `Switches` 配下のファイル。
  ワールドを動作させるために必要な部分
- **エディタ拡張**: `Editor` 配下のファイル。変換・ベイク・仕上げの機能そのもの

### できること

- 購入者が、自身の制作物にツール本体を組み込んで利用すること
- ツール本体を組み込んだワールド・作品を、無償・有償を問わず公開・頒布すること
- 購入者自身の利用の範囲で、ツール本体を改変して使うこと
- 改変や不具合修正の内容を、他の制作者へ説明・共有すること
  （ソースコードそのものの公開は下記のとおりできません）
- **購入者どうしで、ツール本体を共有すること**（下記「購入者どうしの共有」）
- プロジェクトのリポジトリにツール本体を格納すること（下記「チームでの利用」）

### できないこと

- ツール本体を、購入していない者へ再配布・転売・譲渡・共有すること
- ツール本体のソースコードを、そのままあるいは改変して公開すること
- うすあかり工房が制作した部分を流用して、別のツールを制作・頒布すること

制作物にツール本体を含めない形（ワールドへのアップロード、生成されたライトマップの同梱）は
「再配布」にあたりません。

### 購入者どうしの共有

**相手が購入者であれば、ツール本体をそのまま渡して構いません。**
改変したものも同様です。何を渡してよいかを気にする必要はありません。

### チームでの利用

プロジェクトのリポジトリにツール本体を格納して構いません。
**Unity エディタ上でツールを操作する人が購入者であること**が条件です。
シーンを開く、ワールドをアップロードするといった作業だけを行う人には、
購入は必要ありません。

法人・チームで購入する場合は、ツールを操作する人数分をご購入ください。

### 受注制作での納品について

納品先が購入者であれば、ツール本体を含めたまま納品して構いません。

納品先が購入していない場合は、**実行時ファイル（`Shaders` / `Scripts` / `Switches` 配下）
と `LICENSE.md` を含めて納品できます。** `Editor` 配下は取り除いてください。
これでワールドは問題なく動作し、変換済みマテリアルの表示も保たれます。
納品先が自身でベイクをやり直したい場合は、購入していただく形になります。

`LICENSE.md` は必ず一緒に含めてください。シェーダーが引き継いでいる
ベースシェーダーのライセンス全文は、このファイルにしか入っていません。

この形での納品にあたって、うすあかり工房への連絡や許諾の取得は必要ありません。

### 生成されたシェーダーの扱い

マテリアル変換で生成される `Usuakari_koubou/*_LightmapBlend` シェーダーは、
同梱テンプレートと同じ内容です。**ツール本体の複製として、本規約が適用されます。**
上記「受注制作での納品について」の場合を除き、購入していない者へ渡さないでください。

### 保証と責任

本ツールは現状有姿で提供されます。特定の目的への適合性を含め、いかなる保証も
行いません。本ツールの使用または使用不能から生じたいかなる損害についても、
うすあかり工房は責任を負いません。

アップデートの提供、不具合への対応、動作環境の追加は、いずれも義務ではありません。
デジタル商品の性質上、購入後の返金には応じられません。

### 規約の変更

本規約は変更されることがあります。変更後の規約は、それ以降に公開されるバージョンに
適用されます。すでに購入したバージョンには、購入時点の規約が引き続き適用されます。

### 規約違反

本規約に違反した場合、そのライセンスは通知なく終了します。終了後はツール本体の
利用を停止し、保持している複製を破棄してください。

**すでに公開しているワールドの取り下げまでは求めません。**
納品済みの制作物についても同様です。

### 準拠法

本規約は日本法に準拠します。

### 過去のバージョンについて

v1.0.0 より前はベータ版として「Funwari_LightBlend v2.x」の番号で開発しており、
v2.7.3 以前のベータ版は MIT License で頒布していました。その許諾は撤回できないため、
当該バージョンには引き続き MIT License が適用されます。

正式版にあたり番号を v1.0.0 から振り直しました。本規約は v1.0.0 以降に適用されます。
（番号上は v1.0.0 < v2.x ですが、v1.0.0 が最新です）

### 困ったときは

本規約は、想定しきれなかった使い方を禁止するために書いたものではありません。
規約のどこにも当てはまらない使い方をしたい場合、判断に迷う場合、
規約が制作の妨げになっている場合は、**遠慮なく問い合わせてください。**
できる限り「使える」方向で回答します。

問い合わせ先: BOOTH ショップのメッセージ機能

---

## 本配布物に含まれる第三者著作物について

本配布物の Shaders 配下には、**下記のベースシェーダーを改変した派生物が含まれます。**

含まれているもの・いないものの区別は次のとおりです。

- **ベースシェーダー側の実装本体**（各パッケージの `.cginc` / `.hlsl`）は含まれません。
  購入者の環境に導入されたものを `#include` で参照します
- **ShaderLab 層**（`Shader` ブロック、`Properties`、パス構成、`#pragma` 宣言）は、
  ベースのコードを元にした派生物として含まれます
- **同梱の `.hlsl`**（`*_lightmapblend.hlsl`）は、うすあかり工房が書いたブレンド処理です。
  一部の関数はベースの実装を元にしています（`lightmapblend_common.hlsl` のみ完全な自作）

利用にあたっては、購入者が各ベースシェーダーパッケージを自身の環境に導入する
必要があります。

| ベースシェーダー | 権利者 | ライセンス | 導入先 |
|---|---|---|---|
| Unity Built-in Shaders (Standard / Standard Specular) | Unity Technologies | MIT License | Unity Editor 内蔵 |
| Filamented | Silent (s-ilent) | Apache License 2.0 | `Packages/s-ilent.filamented` |
| lilPBR | lilxyzw | zlib-style License | `Packages/jp.lilxyzw.lilpbr` |
| Mochie's Unity Shaders | MochiesCode | MIT License | `Assets/Mochie/` |
| Poiyomi Toon Shader | Poiyomi Inc. | MIT License | `Packages/com.poiyomi.toon` |
| LuraSwitch2 | QuickBrown Design Studio | VN3ライセンス | `Assets/QuickBrown/LuraSwitch2`（BOOTHで無償配布） |

Poiyomi 版は、購入者の環境で導入済みの Poiyomi へ動的にパッチを当てて生成されます。
派生物を配布物に含めていないため、下記のライセンス全文には含めていません。

Switches 配下のプレハブ（Switch_Light / Slider_Night）は、LuraSwitch2 の構成を
継承した派生物です。LuraSwitch2 本体のファイルは同梱しておらず、購入者の環境に
導入されたものを参照します。LuraSwitch2 の利用規約（VN3ライセンス）は、
改変したデータの配布とソフトウェアへの組み込みを営利・非営利を問わず許可しています。
スイッチとスライダーのデザインは QuickBrown Design Studio の制作です。

各ベースシェーダーを改変したファイルには、その旨をファイル先頭に明示しています。

---

## 第三者ライセンス全文
### Unity Built-in Shaders

Unity 組み込みシェーダー配布物 (builtin_shaders) 同梱の license.txt より。

```
Copyright (c) 2016 Unity Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### Mochie's Unity Shaders

MochiesCode/Mochies-Unity-Shaders 同梱の LICENSE より。

```
MIT License

Copyright (c) 2020 MochiesCode

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### lilPBR

jp.lilxyzw.lilpbr 同梱の LICENSE より。

```
Copyright (c) 2025-present lilxyzw

This software is provided 'as-is', without any express or implied warranty.
In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.

   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.

   3. This notice may not be removed or altered from any source distribution.
```

### Filamented

s-ilent.filamented 同梱の LICENSE.md より (Apache License 2.0 全文)。
Filamented 自体も Unity Built-in Shaders および Filament (Copyright (C) 2020 Google, Inc.) の
派生物であり、それらは上記および Apache License 2.0 の下で提供されています。

```
Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

---

## 派生シェーダーの生成について

本ツールは、購入者がマテリアル変換を実行した時点で、購入者のローカル環境に
派生シェーダー (`Usuakari_koubou/*_LightmapBlend`) を生成します。生成方法は
2通りです。

- オンデマンド生成: 同梱の `.shader.txt` を `.shader` として書き出す
- 動的パッチ生成 (Poiyomi): 導入済みのベースシェーダーを読み取り、パッチを当てて書き出す

生成された派生シェーダーは、同梱テンプレートと同じ内容です。上記「生成された
シェーダーの扱い」のとおり、ツール本体の複製として本規約が適用されます。

なお、購入者が生成物を含むプロジェクトを（本規約が認める範囲で）他者へ渡す場合、
ベースシェーダーのライセンス条件（著作権表示の保持など）を遵守する責任は、
渡す側にあります。ファイル先頭の著作権表示を消さないでください。

---

## 改変内容

各ベースシェーダーに対して、次の改変を行っています。

1. ライトマップブレンド機能の追加
   - グローバル変数 `_UdonLightmapBlend` による制御
   - 消灯時ライトマップ `_LightmapOff` のサンプリング

2. リフレクションプローブブレンド機能の追加
   - グローバル変数 `_UdonReflectionProbeOff` による制御

3. `GetGI` / `GetReflection` / `ComputeLights` / `FragmentGI` / `evaluateIBL` /
   `frag` 等の関数のオーバーライドまたは差し替え
