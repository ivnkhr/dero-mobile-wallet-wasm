// Copyright DERO Project under DERO license

// we should always give all users everything, so there are minimal differences in queries



// Please use the english source for translation
var en = { "translation":
    {
        "language_name":"English",

        "tr_title": "DERO Web Wallet",
        "tr_DERO" : "DERO",
        "tr_wallet":"Wallet",
        "tr_close":"Close",
        "tr_password":"Password",
        "tr_success":"Success",

        "no_wasm" : "Please restart or upgrade your browser to run DERO web wallet.",
        "wallet_minimum_topoheight":"Wallet may be restored from Topo Height ",
        "carousel_fast_title" :"Fast Transactions",
        "carousel_fast_text": "DERO Transfers instantly < 12 seconds.",
        "carousel_privacy_title" :"Unbreakable Privacy by design",
        "carousel_privacy_text": "DERO network has unbreakable and mandatory privacy for all transactions.",
        "carousel_privacy_text2": "No one knows who spent/received what/when/where.",
        "carousel_easy_title": "Easy to Use",
        "carousel_easy_text":"We officially support almost all OS Windows/Mac/Linux/Unix/BSD/Solaris, even Android/IOS.",
        "carousel_tech_title":"Technology Leader",
        "carousel_tech_text":"Industry leader with innovation and features such as DAG Technology, Bullet-Proofs, TLS encrypted network.",
        "carousel_orig_title":"Original Developers",
        "carousel_orig_text":"DERO project has been developed from scratch and is being actively developed by original developers.",
        "carousel_touch_title":"Get in touch",
        "carousel_touch_text":"You can help and contribute to the project by discussions, suggestions, development, testing or even just spreading the word.",
        "front_available_wallet":"Available Wallets",
        "front_open_saved_wallet":"Open Selected wallet",
        "front_delete_saved_wallet":"Delete Selected Wallet",
        "front_recover_seed_wallet":"Recover Wallet using SEED words (25 words )",
        "front_recover_key_wallet":"Recover Wallet using Recovery Key (64 hex char)",
        "front_recover_view_wallet":"Recover View Only Wallet (128 hex char)",
        "front_create_new_wallet":"Create New Wallet",
        "front_upload_wallet":"Upload Wallet from DISK",
        "control_wallet_seed":"Your Wallet SEED",
        "control_wallet_settings":"Settings",
        "control_wallet_logout":"Logout",

        "balance_total":"Total",
        "balance_locked":"Locked",
        "balance_unlocked":"Unlocked",

        "wallet_address": "Address",
        "blockchain_height": "Blockchain Height",
        "daemon_address" : "Daemon Address",
        "tab_send":"Send",
        "tab_receive":"Receive",
        "tab_history":"TX History",
        "tab_about":"About",


        "tab_send_sendto_label":"Send to DERO Address",
        "tab_send_sendto_address_placeholder":"Enter valid DERO address",
        "tab_send_amount_label":"DERO Amount",
        "tab_send_amount_placeholder":"Enter DERO Amount to send",
        "tab_send_paymentid_label":"Payment ID (optional):",
        "tab_send_paymentid_placeholder":"Optional PaymentID in hex",
        "tab_send_send_transaction":"Send Transaction",


        "tab_receive_wallet_address":"Wallet Address",
        "tab_receive_i32_address":"Integrated 32 Address",
        "tab_receive_i32_paymentid":"Integrated 32 Address  Payment ID ",
        "tab_receive_i8_address":"Integrated 8 Address",
        "tab_receive_i8_paymentid":"Integrated 8 Address Payment ID( This will be encrypted only sender/receiver can see this)",

        "tab_receive_generate":"Generate Integrated address",
        "tab_history_load":"Load TX history",
        "tab_history_export_csv":"Export to CSV",


        "tx_confirmation":"Transfer Confirmation",
        "tx_input_amount":"Input Amount",
        "tx_sending_amount":"Sending",
        "tx_fees":"Fees",
        "tx_change":"Change",
        "tx_size":"TX Size",
        "tx_transfer":"Transfer",




        "password_placeholder":"Password",
        "cpassword":"Confirm Password",
        "cpassword_placeholder":"Confirm Password",
        "wallet_start_topoheight":"Wallet start Topoheight: (optional)",
        "recover_wallet":"Recover Wallet",
        "wallet_name":"Wallet Name",
        "wallet_name_quick_placeholder":"Wallet Name for quick reference",

        "recover_seed_title":"Wallet Recovery using Seed Words",
        "25_seed_words":"25 Seed Words",

        "recover_key_title":"Wallet Recovery using Recovery Key",
        "recover_key":"Recovery Key (64 hex chars)",

        "recover_viewkey_title":"Wallet Recovery using View Key",
        "recover_viewkey":"View Key (128 hex chars)",

        "create_new_title":"Create New Wallet",
        "create_new":"Create New Wallet",


        "seed_title":"Your DERO wallet SEED",
        "seed1": "Your wallet can be recovered using the below seed.",
        "seed2": "You must save the SEED in a safe secure location.",
        "seed3": "Sharing your SEED is equal to sharing your wallet.If your SEED is lost, consider your wallet as lost.",
        "seed_language": "Seed Language",


        "settings_title":"Settings and Tools",
        "download_wallet_file":"Download Wallet as file",
        "download_wallet":"Download Wallet",
        "rename_wallet":"Rename Open Wallet",
        "rename_wallet_placeholder":"New wallet name",
        "change_wallet_start_topoheight":"Change Wallet Start TopoHeight",
        "change_wallet_start_topoheight_rare":"Change Wallet Start TopoHeight (Rare use)  Current:",
        "change_wallet_password":"Change Wallet Password",
        "new_password":"New Password",
        "new_cpassword":"Confirm New Password",
        "rescan_blockchain":"Rescan Blockchain from start topoheight",
        "rescan_blockchain_rare":"Never or Rarely required. Wallet gets busy for 20-30 minutes",
        "rescan_blockchain_trigger":"Trigger Blockchain Rescan",
        "transfer_everything":"Transfer Everything to DERO Address (DERO balance)",
        "dero_address":"DERO Address",
        "valid_dero_address_placeholder":"Enter Valid DERO address",
        "send_now":"Send Now",



        "enter_password":"Please enter your Wallet Password",
        "invalid_password":"Invalid wallet password. please retry.",
        "password_mismatch":"Password mismatch",
        "password_changed":"Password changed",
        "small_password":"Wallet password should be atleast 5 chars. Prefer 10 char passwords.",
        "invalid_address":"Invalid DERO address, please retry",
        "invalid_amount":"Invalid DERO amount",
        "invalid_payid":"Invalid PaymentID",
        "wallet_name_empty":"Wallet name should be atleast 1 character long",

    }
};

var zh_TW = { "translation":
    {
        "language_name":"正體中文",
         "tr_title":  "DERO網路錢包 ",
             "tr_DERO":  "DERO ",
             "tr_wallet":  "錢包 ",
             "tr_close":  "關閉 ",
             "tr_password":  "密碼 ",
             "tr_success":  "成功 ",

 "carousel_fast_title":  "快速交易 ",
             "carousel_fast_text":  "DERO交易時間少於12秒。",
             "carousel_privacy_title":  "基於設計的堅不可摧的隱私保護",
             "carousel_privacy_text":  "DERO網絡中所有交易都具有牢不可破的強制性隱私保護。",
             "carousel_privacy_text2":  "沒有人知道是誰在何時、何地支付/接收了什麼。",
             "carousel_easy_title":  "便於使用 ",
             "carousel_easy_text":  "我們官方支援幾乎所有的作業系統，如 Windows/Mac/Linux/Unix/BSD/Solaris, 甚至 Android/IOS。",
             "carousel_tech_title":  "技術引領者 ",
             "carousel_tech_text":  "具有大量創新和新特性的行業引領者, 如 DAG 技術、防彈協議、TLS 加密網路。",
             "carousel_orig_title":  "原班開發人員 ",
             "carousel_orig_text":  "DERO專案由原班開發人員從零開始構建，并依然在不斷創新",
             "carousel_touch_title":  "聯繫我們 ",
             "carousel_touch_text":  "您可以通過討論、建議、開發、測試甚至僅僅是隻言片語的傳播來為此專案作出貢獻。",
             "front_available_wallet":  "可用錢包 ",
             "front_open_saved_wallet":  "打開選定的錢包 ",
             "front_delete_saved_wallet":  "刪除選定的錢包 ",
             "front_recover_seed_wallet":  "使用種子字恢復錢包 (25个單字) ",
             "front_recover_key_wallet":  "使用恢復金鑰恢復錢包 (64个十六進位字元) ",
             "front_recover_view_wallet":  "恢復僅查看錢包 (128个十六進位字元) ",
             "front_create_new_wallet":  "創建新的錢包 ",
             "front_upload_wallet":  "從硬碟载入錢包 ",
             "control_wallet_seed":  "你的錢包種子 ",
             "control_wallet_settings":  "設置 ",
             "control_wallet_logout":  "登出 ",

 "balance_total":  "總計餘額 ",
             "balance_locked":  "鎖定餘額 ",
             "balance_unlocked":  "已解鎖餘額 ",

 "wallet_address":  "位址 ",
             "blockchain_height":  "區塊鏈高度 ",
             "daemon_address":  "DERO進程位址 ",
             "tab_send":  "發送 ",
             "tab_receive":  "接收 ",
             "tab_history":  "交易歷史 ",
             "tab_about":  "關於 ",

 "tab_send_sendto_label":  "發送到DERO位址 ",
             "tab_send_sendto_address_placeholder":  "輸入有效的DERO位址 ",
             "tab_send_amount_label":  "DERO金額 ",
             "tab_send_amount_placeholder":  "輸入要發送的DERO量 ",
             "tab_send_paymentid_label":  "PaymentID (可選): ",
             "tab_send_paymentid_placeholder":  "可選的十六進位PaymentID  ",
             "tab_send_send_transaction":  "發送交易 ",

 "tab_receive_wallet_address":  "錢包位址 ",
             "tab_receive_i32_address":  "整合的32位址 ",
             "tab_receive_i32_paymentid":  "整合32位址的PaymentID ",
             "tab_receive_i8_address":  "整合的8位址 ",
             "tab_receive_i8_paymentid":  "整合8位址的PaymentID (這將被加密，僅發送/接收方可以查看) ",

 "tab_receive_generate":  "生成整合位址 ",
             "tab_history_load":  "載入交易歷史記錄 ",
             "tab_history_export_csv":  "匯出到 csv ",

 "tx_confirmation":  "交易確認 ",
             "tx_input_amount":  "輸入量 ",
             "tx_sending_amount":  "發送量 ",
             "tx_fees":  "費用 ",
             "tx_change":  "更改 ",
             "tx_size":  "交易大小 ",
             "tx_transfer":  "發送交易 ",


 "password_placeholder":  "密碼 ",
             "cpassword":  "確認密碼 ",
             "cpassword_placeholder":  "確認密碼 ",
             "wallet_start_topoheight":  "錢包開始的區塊高度: (可選) ",
             "recover_wallet":  "恢復錢包 ",
             "wallet_name":  "錢包名稱 ",
             "wallet_name_quick_placeholder":  "錢包別名 ",

 "recover_seed_title":  "使用種子字恢復錢包",
             "25_seed_words":  "25个種子字 ",

 "recover_key_title":  "使用恢復金鑰恢復錢包 ",
             "recover_key":  "恢復金鑰 (64个十六進位字元) ",

 "recover_viewkey_title":  "使用查看金鑰恢復錢包",
             "recover_viewkey":  "查看金鑰 (128个十六進位字元) ",

 "create_new_title":  "創建新的錢包 ",
             "create_new":  "創建新的錢包 ",

 "seed_title":  "你的DERO錢包種子 ",
             "seed1":  "您的錢包可以使用下面的種子來恢復。",
             "seed2":  "您必須將種子保存在安全的位置。",
             "seed3":  "公開您的種子等於公開您的錢包。如果您的種子丟失, 您的錢包等同於丟失。",
             "seed_language":  "種子語言 ",

 "settings_title":  "設置和工具 ",
             "download_wallet_file":  "保存錢包檔案至本地硬碟 ",
             "download_wallet":  "下載錢包 ",
             "rename_wallet":  "重命名當前錢包 ",
             "rename_wallet_placeholder":  "新的錢包名稱 ",
             "change_wallet_start_topoheight":  "更改錢包的起始區塊高度 ",
             "change_wallet_start_topoheight_rare":  "更改錢包的起始區塊高度 (很少使用)，當前起始高度: ",
             "change_wallet_password":  "更改錢包密碼 ",
             "new_password":  "新密碼 ",
             "new_cpassword":  "確認新密碼 ",
             "rescan_blockchain":  "從起始區塊高度開始，重新掃描整個區塊鏈 ",
             "rescan_blockchain_rare":  "很少需要使用此功能，錢包需要工作20~30分鐘以完成掃描。 ",
             "rescan_blockchain_trigger":  "觸發區塊鏈重新掃描 ",
             "transfer_everything":  "將所有餘額轉移到另一個DERO位址 (DERO餘額) ",
             "dero_address":  "DERO位址 ",
             "valid_dero_address_placeholder":  "輸入有效的DERO位址 ",
             "send_now":  "立即發送 ",

 "enter_password":  "請輸入您的錢包密碼 ",
             "invalid_password":  "不正確的錢包密碼。請重試。",
             "password_mismatch":  "密碼不匹配 ",
             "password_changed":  "密碼已更改 ",
             "small_password":  "錢包密碼應至少為5字元. 建議至少10個字元。",
             "invalid_address":  "不正確的DERO位址, 請重試 ",
             "invalid_amount":  "不正確的DERO金額 ",
             "invalid_payid":  "不正確的PaymentID ",
             "wallet_name_empty":  "錢包名稱應至少為1字元長 ",
       
        "password_placeholder":  "密碼 ",
             "cpassword":  "確認密碼 ",
             "cpassword_placeholder":  "確認密碼 ",
             "wallet_start_topoheight":  "錢包起始區塊高度: (可選) ",
             "recover_wallet":  "恢復錢包 ",
             "wallet_name":  "錢包名稱 ",
             "wallet_name_quick_placeholder":  "錢包別名 ",

 "recover_seed_title":  "使用種子字恢復錢包",
             "25_seed_words":  "25個種子字 ",

 "recover_key_title":  "使用恢復金鑰恢復錢包 ",
             "recover_key":  "恢復金鑰 (64個十六進位字元) ",

 "recover_viewkey_title":  "使用查看金鑰恢復錢包",
             "recover_viewkey":  "查看金鑰 (128個十六進位字元) ",

 "create_new_title":  "創建新的錢包 ",
             "create_new":  "創建新的錢包 ",

 "seed_title":  "你的DERO錢包種子 ",
             "seed1":  "您的錢包可以使用下面的種子來恢復。",
             "seed2":  "您必須將種子保存在安全的位置。",
             "seed3":  "公開您的種子等於公開您的錢包。如果您的種子丟失, 您的錢包等同於丟失。",
             "seed_language":  "種子語言 ",

 "settings_title":  "設置和工具 ",
             "download_wallet_file":  "保存錢包檔案至本地磁盤 ",
             "download_wallet":  "下載錢包 ",
             "rename_wallet":  "重命名當前錢包 ",
             "rename_wallet_placeholder":  "新的錢包名稱 ",
             "change_wallet_start_topoheight":  "更改錢包起始區塊高度",
             "change_wallet_start_topoheight_rare":  "更改錢包的起始區塊高度 (很少使用)，當前起始高度: ",
             "change_wallet_password":  "更改錢包密碼 ",
             "new_password":  "新密碼 ",
             "new_cpassword":  "確認新密碼 ",
             "rescan_blockchain":  "從起始區塊高度開始，重新掃描整個區塊鏈",
             "rescan_blockchain_rare":  "很少需要使用此功能，錢包需要工作20~30分鐘以完成掃描。",
             "rescan_blockchain_trigger":  "觸發區塊鏈重新掃描 ",
             "transfer_everything":  "將所有餘額轉移到另一個DERO位址 (DERO餘額) ",
             "dero_address":  "DERO位址 ",
             "valid_dero_address_placeholder":  "輸入有效的DERO位址 ",
             "send_now":  "立即發送 ",

 "enter_password":  "請輸入您的錢包密碼 ",
             "invalid_password":  "不正確的錢包密碼。請重試。",
             "password_mismatch":  "密碼不匹配 ",
             "password_changed":  "密碼已更改 ",
             "small_password":  "錢包密碼應至少為5字元. 建議至少10個字元。",
             "invalid_address":  "不正確的DERO位址, 請重試 ",
             "invalid_amount":  "不正確的DERO金額 ",
             "invalid_payid":  "不正確的PaymentID ",
             "wallet_name_empty":  "錢包名稱應至少為1字元長 ",

    }
};


var zh_CN = { "translation":
    {
        "language_name":"简体中文",
         "tr_title":  "DERO网络钱包 ",
             "tr_DERO":  "DERO ",
             "tr_wallet":  "钱包 ",
             "tr_close":  "关闭 ",
             "tr_password":  "密码 ",
             "tr_success":  "成功 ",

 "carousel_fast_title":  "快速交易",
             "carousel_fast_text":  "DERO交易时间少于12秒",
             "carousel_privacy_title":  "基于设计的坚不可摧的隐私保护 ",
             "carousel_privacy_text":  "DERO网络中所有交易都具有牢不可破的强制性隐私保护。",
             "carousel_privacy_text2":  "没有人知道谁在何时、何地支付/接收了什么",
             "carousel_easy_title":  "易于使用 ",
             "carousel_easy_text":  "我们官方支持几乎所有操作系統，如 Windows/Mac/Linux/Unix/BSD/Solaris, 甚至 Android/IOS。",
             "carousel_tech_title":  "技术引领者 ",
             "carousel_tech_text":  "具有大量创新和新特性的行业引领者, 如 DAG 技术、防弹协议、TLS 加密网络。",
             "carousel_orig_title":  "原班开发人员 ",
             "carousel_orig_text":  "DERO项目由原班开发人员从零开始开发, 并依然在不断创新",
             "carousel_touch_title":  "联系我们 ",
             "carousel_touch_text":  "您可以通过讨论、建议、开发、测试甚至只是只言片语的传播来为此项目作出贡献。",
             "front_available_wallet":  "可用钱包 ",
             "front_open_saved_wallet":  "打开选定的钱包 ",
             "front_delete_saved_wallet":  "删除选定的钱包 ",
             "front_recover_seed_wallet":  "使用种子字恢复钱包 (25个单词) ",
             "front_recover_key_wallet":  "使用恢复密钥恢复钱包 (64个十六进制字符) ",
             "front_recover_view_wallet":  "恢复仅查看钱包 (128个十六进制字符) ",
             "front_create_new_wallet":  "创建新的钱包 ",
             "front_upload_wallet":  "从本地硬盘导入钱包 ",
             "control_wallet_seed":  "你的钱包种子 ",
             "control_wallet_settings":  "设置 ",
             "control_wallet_logout":  "注销 ",

 "balance_total":  "总计余额 ",
             "balance_locked":  "锁定余额 ",
             "balance_unlocked":  "已解锁余额 ",

 "wallet_address":  "地址 ",
             "blockchain_height":  "区块链高度 ",
             "daemon_address":  "DERO进程地址 ",
             "tab_send":  "发送 ",
             "tab_receive":  "接收 ",
             "tab_history":  "交易历史 ",
             "tab_about":  "关于 ",

 "tab_send_sendto_label":  "发送到DERO地址 ",
             "tab_send_sendto_address_placeholder":  "输入有效的DERO地址 ",
             "tab_send_amount_label":  "DERO金额 ",
             "tab_send_amount_placeholder":  "输入要发送的DERO量 ",
             "tab_send_paymentid_label":  "付款 ID (可选): ",
             "tab_send_paymentid_placeholder":  "可选的十六进制PaymentID ",
             "tab_send_send_transaction":  "发送交易 ",

 "tab_receive_wallet_address":  "钱包地址 ",
             "tab_receive_i32_address":  "集成的32地址 ",
             "tab_receive_i32_paymentid":  "集成32地址的PaymentID ",
             "tab_receive_i8_address":  "集成8地址 ",
             "tab_receive_i8_paymentid":  "集成8地址的PaymentID (这将被加密，仅发件人/接收方可以看到) ",

 "tab_receive_generate":  "生成集成地址 ",
             "tab_history_load":  "加载交易历史记录 ",
             "tab_history_export_csv":  "导出到 csv ",

 "tx_confirmation":  "交易确认 ",
             "tx_input_amount":  "输入量 ",
             "tx_sending_amount":  "发送量 ",
             "tx_fees":  "费用 ",
             "tx_change":  "更改 ",
             "tx_size":  "tx 大小 ",
             "tx_transfer":  "传输 ",


 "password_placeholder":  "密码 ",
             "cpassword":  "确认密码 ",
             "cpassword_placeholder":  "确认密码 ",
             "wallet_start_topoheight":  "钱包的起始区块高度: (可选) ",
             "recover_wallet":  "恢复钱包 ",
             "wallet_name":  "钱包名称 ",
             "wallet_name_quick_placeholder":  "钱包别名 ",

 "recover_seed_title":  "使用种子词的钱包恢复",
             "25_seed_words":  "25个种子字 ",

 "recover_key_title":  "使用恢复密钥恢复钱包 ",
             "recover_key":  "恢复密钥 (64个十六进制字符) ",

 "recover_viewkey_title":  "使用查看秘钥恢复钱包",
             "recover_viewkey":  "查看密钥 (128个十六进制字符) ",

 "create_new_title":  "创建新的钱包 ",
             "create_new":  "创建新的钱包 ",

 "seed_title":  "你的DERO钱包种子 ",
             "seed1":  "您的钱包可以使用下面的种子来恢复。",
             "seed2":  "您必须将种子保存在安全的位置。",
             "seed3":  "公开您的种子等于公开您的钱包。如果您的种子丢失, 您的钱包等同于丢失了。",
             "seed_language":  "种子语言 ",

 "settings_title":  "设置和工具 ",
             "download_wallet_file":  "下载钱包文件到本地硬盘 ",
             "download_wallet":  "下载钱包 ",
             "rename_wallet":  "重命名当前钱包 ",
             "rename_wallet_placeholder":  "新的钱包名称 ",
             "change_wallet_start_topoheight":  "更改钱包的起始区块高度",
             "change_wallet_start_topoheight_rare":  "更改钱包的起始区块高度(很少使用)，当前高度: ",
             "change_wallet_password":  "更改钱包密码 ",
             "new_password":  "新密码 ",
             "new_cpassword":  "确认新密码 ",
             "rescan_blockchain":  "从起始高度开始重新扫描整个区块链",
             "rescan_blockchain_rare":  "从不或很少需要使用此功能，钱包需要20~30分钟完成扫描",
             "rescan_blockchain_trigger":  "触发区块链重新扫描 ",
             "transfer_everything":  "将所有余额传输到另一个DERO地址 (DERO余额) ",
             "dero_address":  "DERO地址 ",
             "valid_dero_address_placeholder":  "输入有效的DERO地址 ",
             "send_now":  "立即发送 ",

 "enter_password":  "请输入您的钱包密码 ",
             "invalid_password":  "错误的钱包密码。请重试。",
             "password_mismatch":  "密码不匹配 ",
             "password_changed":  "密码已更改 ",
             "small_password":  "钱包密码应至少为5字，建议至少10个字符。",
             "invalid_address":  "无效的DERO地址, 请重试 ",
             "invalid_amount":  "无效的DERO金额 ",
             "invalid_payid":  "无效的PaymentID ",
             "wallet_name_empty":  "钱包名称应至少为1字符长 ",


              "password_placeholder":  "密码 ",
             "cpassword":  "确认密码 ",
             "cpassword_placeholder":  "确认密码 ",
             "wallet_start_topoheight":  "钱包起始区块高度: (可选) ",
             "recover_wallet":  "恢复钱包 ",
             "wallet_name":  "钱包名称 ",
             "wallet_name_quick_placeholder":  "钱包别名 ",

 "recover_seed_title":  "使用种子词恢复钱包",
             "25_seed_words":  "25个种子字 ",

 "recover_key_title":  "使用恢复密钥恢复钱包 ",
             "recover_key":  "恢复密钥 (64个十六进制字符) ",

 "recover_viewkey_title":  "使用查看密钥恢复钱包",
             "recover_viewkey":  "查看密钥 (128个十六进制字符) ",

 "create_new_title":  "创建新的钱包 ",
             "create_new":  "创建新的钱包 ",

 "seed_title":  "你的DERO钱包种子 ",
             "seed1":  "您的钱包可以使用下面的种子来恢复。",
             "seed2":  "您必须将种子保存在安全的位置。",
             "seed3":  "公开您的种子等于公开您的钱包。如果您的种子丢失, 您的钱包等同于丢失了。",
             "seed_language":  "种子语言 ",

 "settings_title":  "设置和工具 ",
             "download_wallet_file":  "下载钱包文件到本地磁盘 ",
             "download_wallet":  "下载钱包 ",
             "rename_wallet":  "重命名当前钱包 ",
             "rename_wallet_placeholder":  "新的钱包名称 ",
             "change_wallet_start_topoheight":  "更改钱包的起始区块高度",
             "change_wallet_start_topoheight_rare":  "更改钱包的起始区块高度(很少使用)，当前高度: ",
             "change_wallet_password":  "更改钱包密码 ",
             "new_password":  "新密码 ",
             "new_cpassword":  "确认新密码 ",
             "rescan_blockchain":  "从起始高度开始重新扫描整个区块链",
             "rescan_blockchain_rare":  "从不或很少需要使用此功能，钱包需要20~30分钟完成扫描 ",
             "rescan_blockchain_trigger":  "触发区块链重新扫描 ",
             "transfer_everything":  "将所有余额传输到另一个DERO地址 (DERO余额)",
             "dero_address":  "DERO地址 ",
             "valid_dero_address_placeholder":  "输入有效的DERO地址 ",
             "send_now":  "立即发送 ",

 "enter_password":  "请输入您的钱包密码 ",
             "invalid_password":  "错误的钱包密码。请重试。",
             "password_mismatch":  "密码不匹配 ",
             "password_changed":  "密码已更改 ",
             "small_password":  "钱包密码应至少为5字符,建议至少10个字符。",
             "invalid_address":  "无效的DERO地址, 请重试 ",
             "invalid_amount":  "无效的DERO金额 ",
             "invalid_payid":  "无效的PaymentID ",
             "wallet_name_empty":  "钱包名称应至少为1字符长 ",
   
    }
};


var ja = { "translation":
    {
        "language_name":"日本語",

        "title": "でろ Web ウォレット",
        "DERO" : "DERO",
        "wallet":"ウォレット",
        "close":"閉じる",


        "carousel_fast_title":  "高速トランザクション ",
        "carousel_fast_text":  "でろは即座に転送します < 12 秒 ",
        "carousel_privacy_title":  "デザインによる壊れないプライバシー ",
        "carousel_privacy_text":  "でろネットワークには、すべてのトランザクションに対して、解読不可能で必須のプライバシーがあります。",
        "carousel_privacy_text2":  "誰が何を/いつ/どこで/受信したかを知っていません。",
        "carousel_easy_title":  "使いやすい ",
        "carousel_easy_text":  "我々は正式にほぼすべての OS の Windows/Mac/Linux/Unix/BSD/Solaris でも、アンドロイド/IOS をサポートしています。",
        "carousel_tech_title":  "技術リーダー ",
        "carousel_tech_text":  "技術革新と機能を持つ業界リーダー、DAG テクノロジー、BulletProofs、TLS 暗号化ネットワーク ",
        "carousel_orig_title":  "元の開発者 ",
        "carousel_orig_text":  "でろプロジェクトは最初から開発されており、元の開発者によって積極的に開発されています。",
        "carousel_touch_title":  "タッチで取得 ",
        "carousel_touch_text":  "あなたは、議論、提案、開発、テスト、あるいは単に単語を広めることによって、プロジェクトに役立つと貢献することができます。",
        "front_available_wallet":  "利用可能なウォレット ",
        "front_open_saved_wallet":  "選択したウォレットを開く ",
        "front_delete_saved_wallet":  "選択したウォレットの削除 ",
        "front_recover_seed_wallet":  "シードワード (25 ワード) を使用してウォレットを回復 ",
        "front_recover_key_wallet":  "回復キーを使用してウォレットを回復する (64 16 進数の文字) ",
        "front_recover_view_wallet":  "回復ビューのみのウォレット (128 hex char) ",
        "front_create_new_wallet":  "新しいウォレットの作成 ",
        "front_upload_wallet":  "ディスクからウォレットをアップロード ",
        "control_wallet_seed":  "ウォレットのシード ",
        "control_wallet_settings":  "設定 ",
        "control_wallet_logout":  "ログアウト ",

        "balance_total":  "合計 ",
        "balance_locked":  "ロック ",
        "balance_unlocked":  "ロック解除 ",

        "wallet_address":  "アドレス ",
        "blockchain_height":  "ブロックチェーンの高さ ",
        "daemon_address":  "デーモンアドレス ",
        "tab_send":  "送信 ",
        "tab_receive":  "受信 ",
        "tab_history":  "TX の履歴 ",
        "tab_about":  "約 ",


        "tab_send_sendto_label":  "でろアドレスに送信 ",
        "tab_send_sendto_address_placeholder":  "有効なでろアドレスを入力してください ",
        "tab_send_amount_label":  "でろ量 ",
        "tab_send_amount_placeholder":  "でろ送信する金額を入力してください ",
        "tab_send_paymentid_label":  "支払 ID (オプション): ",
        "tab_send_paymentid_placeholder":  "オプションの paymentid を16進数で ",
        "tab_send_send_transaction":  "トランザクションの送信 ",

        "tab_receive_wallet_address":  "ウォレットアドレス ",
        "tab_receive_i32_address":  "統合32アドレス ",
        "tab_receive_i32_paymentid":  "統合32アドレス支払 ID ",
        "tab_receive_i8_address":  "統合された8アドレス ",
        "tab_receive_i8_paymentid":  "統合された8アドレスの支払い ID (これは、送信者/受信者のみがこれを見ることができます)  を暗号化する ",

        "tab_receive_generate":  "統合アドレスの生成 ",
        "tab_history_load":  "読み込み TX 履歴 ",
        "tab_history_export_csv":  "csv へエクスポート ",


        "tx_confirmation":  "転送確認 ",
        "tx_input_amount":  "入力量 ",
        "tx_sending_amount":  "送信中 ",
        "tx_fees":  "手数料 ",
        "tx_change":  "変更 ",
        "tx_size":  "tx サイズ ",
        "tx_transfer":  "転送 ",

        "password":  "パスワード ",
        "password_placeholder":  "パスワード ",
        "cpassword":  "パスワードの確認",
        "cpassword_placeholder":  "パスワードの確認",
        "wallet_start_topoheight":  "ウォレット開始 topoheight: (オプション) ",
        "recover_wallet":  "ウォレットの回復 ",
        "wallet_name":  "wallet_name ",
        "wallet_name_quick_placeholder":  "クイックリファレンスのウォレット名 ",

        "recover_seed_title":  "シードワードを使用したウォレットの回復 ",
        "25_seed_words":  "25 シードワード",

        "recover_key_title":  "回復キーを使用したウォレットの回復 ",
        "recover_key":  "回復キー (64 16 進数の文字) ",

        "recover_viewkey_title":  "ビューキーを使用したウォレットの回復 ",
        "recover_viewkey":  "ビューキー (128 16 進数文字) ",

        "create_new_title":  "新しいウォレットの作成 ",
        "create_new":  "新しいウォレットの作成 ",




        "seed_title":  "でろウォレットシード ",
        "seed1":  "あなたの財布は、以下のシードを使用して回復することができます ",
        "seed2":  "安全で安全な場所にシードを保存する必要があります。",
        "seed3":  "あなたのシードを共有するあなたの財布を共有すると等しくなります。あなたの種が失われた場合, 失われたとしてあなたの財布を検討  ",
        "seed_language":  "シード言語 ",

        "settings_title":  "設定とツール ",
        "download_wallet_file":  "ファイルとしてウォレットをダウンロード ",
        "download_wallet":  "ダウンロードウォレット ",
        "rename_wallet":  "オープンウォレットの名前を変更してください ",
        "rename_wallet_placeholder":  "新しいウォレット名 ",
        "change_wallet_start_topoheight":  "変更ウォレット開始 topoheight ",
        "change_wallet_start_topoheight_rare":  "変更ウォレット開始 topoheight (まれに使用) 現在: ",
        "change_wallet_password":  "ウォレットパスワードの変更 ",
        "new_password":  "新しいパスワード ",
        "new_cpassword":  "新しいパスワードの確認 ",
        "rescan_blockchain":  "ブロックチェーンの再スキャン開始 topoheight ",
        "rescan_blockchain_rare":  "絶対にまたはめったに必要ありません。ウォレットは20-30 分間ビジー状態になります  ",
        "rescan_blockchain_trigger":  "トリガブロックチェーン再スキャン ",
        "transfer_everything":  "すべてをでろアドレス (でろのバランス) に転送 ",
        "dero_address":  "でろアドレス ",
        "valid_dero_address_placeholder":  "有効なでろアドレスを入力してください ",
        "send_now":  "今すぐ送信 ",

        "success":  "成功 ",
        "enter_password":  "ウォレットのパスワードを入力してください ",
        "invalid_password":  "無効なウォレットパスワードです。再試行してください",
        "password_mismatch":  "パスワードの不一致 ",
        "password_changed":  "パスワードが変更されました",
        "small_password":  "ウォレットパスワードは少なくとも5文字である必要があります。10文字のパスワードを優先します。",
        "invalid_address":  "無効なでろアドレス、再試行してください ",
        "invalid_amount":  "無効なでろ量 ",
        "invalid_payid":  "無効な PaymentID ",
        "wallet_name_empty":  "ウォレット名は、少なくとも1文字長にする必要があります ",



    }
};

var ko = { "translation":
    {
        "language_name":"한국어 ",

        "tr_title":  "dero 웹 지갑 ",
        "tr_DERO":  "dero ",
        "tr_wallet":  "지갑 ",
        "tr_close":  "닫기 ",
        "tr_password":  "암호 ",
        "tr_success":  "성공 ",

        "carousel_fast_title":  "빠른 트랜잭션 ",
        "carousel_fast_text":  "dero를 즉시 12 초 동안 전송 합니다. ",
        "carousel_privacy_title":  "디자인에 의하여 깨지지 않는 프라이버시 보호 ",
        "carousel_privacy_text":  "dero 네트워크는 모든 거래에 대해 깨지지 않으며 필수 프라이버시를가지고 있습니다. ",
        "carousel_privacy_text2":  "아무도//언제/어디에 지출/받은 사람을 알고 없다. ",
        "carousel_easy_title":  "사용 하기 쉬운 ",
        "carousel_easy_text":  "우리는 공식적으로 거의 모든 OS 윈도우/맥/리눅스/유닉스/BSD/솔라리스, 심지어 안 드 로이드/i o s를 지원 합니다. ",
        "carousel_tech_title":  "기술 지도자 ",
        "carousel_tech_text":  "혁신 및 DAG 기술, 총알 증거, TLS 암호화 된 네트워크와 같은 기능을 가진 업계 선두 주자. ",
        "carousel_orig_title":  "원래 개발자 ",
        "carousel_orig_text":  "dero 프로젝트는 처음부터 개발 되었으며 원래 개발자가 적극적으로 개발한 것입니다. ",
        "carousel_touch_title":  "터치에 도착 ",
        "carousel_touch_text":  "당신은 도움이 될 수 있습니다 토론, 제안, 개발, 테스트에 의해 프로젝트에 기여할 또는 그냥 단어를 확산. ",
        "front_available_wallet":  "사용 가능한 지갑 ",
        "front_open_saved_wallet":  "선택 된 지갑 열기 ",
        "front_delete_saved_wallet":  "선택 된 지갑을 삭제 ",
        "front_recover_seed_wallet":  "종자 단어를 사용 하 여 지갑 복구 (25 단어) ",
        "front_recover_key_wallet":  "복구 키를 사용 하 여 지갑 복구 (64 16 진수 문자) ",
        "front_recover_view_wallet":  "보기 전용 지갑 복구 (128 진수 문자) ",
        "front_create_new_wallet":  "새 지갑 만들기 ",
        "front_upload_wallet":  "디스크에서 지갑 업로드 ",
        "control_wallet_seed":  "당신의 지갑 종자 ",
        "control_wallet_settings":  "설정 ",
        "control_wallet_logout":  "로그 아웃 ",

        "balance_total":  "total ",
        "balance_locked":  "잠겨 ",
        "balance_unlocked":  "잠금 해제 ",

        "wallet_address":  "주소 ",
        "blockchain_height":  "블록 체인 높이 ",
        "daemon_address":  "데몬 주소 ",
        "tab_send":  "보내기 ",
        "tab_receive":  "수신 ",
        "tab_history":  "TX 역사 ",
        "tab_about":  "에 대 한 ",

        "tab_send_sendto_label":  "dero 주소로 전송 ",
        "tab_send_sendto_address_placeholder":  "유효한 dero 주소를 입력 하십시오 ",
        "tab_send_amount_label":  "dero 양 ",
        "tab_send_amount_placeholder":  "보낼 금액을 입력 합니다.",
        "tab_send_paymentid_label":  "지불 ID (선택 사항): ",
        "tab_send_paymentid_placeholder":  "16 진수에서 선택적 paymentid ",
        "tab_send_send_transaction":  "트랜잭션 전송 ",

        "tab_receive_wallet_address":  "지갑 주소 ",
        "tab_receive_i32_address":  "통합 32 주소 ",
        "tab_receive_i32_paymentid":  "통합 32 주소 결제 ID ",
        "tab_receive_i8_address":  "통합 8 주소 ",
        "tab_receive_i8_paymentid":  "통합 8 주소 지불 ID (이것은 보낸 사람/수신기만 볼 수 있습니다 암호화 됩니다) ",

        "tab_receive_generate":  "통합 주소 생성 ",
        "tab_history_load":  "TX 기록 로드 ",
        "tab_history_export_csv":  "csv로 내보내기 ",

        "tx_confirmation":  "전송 확인 ",
        "tx_input_amount":  "입력 양 ",
        "tx_sending_amount":  "보내기 ",
        "tx_fees":  "수수료 ",
        "tx_change":  "변경 ",
        "tx_size":  "tx 크기 ",
        "tx_transfer":  "전송 ",

        "password_placeholder":  "암호 ",
        "cpassword":  "암호 확인 ",
        "cpassword_placeholder":  "암호 확인 ",
        "wallet_start_topoheight":  "지갑 시작 토폴 높이: (선택 사항) ",
        "recover_wallet":  "지갑 복구 ",
        "wallet_name":  "지갑 이름 ",
        "wallet_name_quick_placeholder":  "빠른 참조를 위한 지갑 이름 ",

        "recover_seed_title":  "종자 단어를 사용 하 여 지갑 복구 ",
        "25_tl_word":  "25 종자 단어 ",

        "recover_key_title":  "복구 키를 사용 하 여 지갑 복구 ",
        "recover_key":  "복구 키 (64 진수 문자) ",

        "recover_viewkey_title":  "보기 키를 사용 하 여 지갑 복구 ",
        "recover_viewkey":  "키 보기 (128 진수 문자) ",

        "create_new_title":  "새 지갑 만들기 ",
        "create_new":  "새 지갑 만들기 ",

        "seed_title":  "당신의 dero 지갑 종자 ",
        "seed1":  "당신의 지갑은 아래 씨앗을 사용 하 여 복구 할 수 있습니다. ",
        "seed2":  "시드를 안전한 안전한 위치에 저장 해야 합니다. ",
        "seed3":  "당신의 씨앗을 공유 하는 것은 당신의 지갑을 공유 하는 것과 같습니다. 당신의 씨앗이 손실 되 면, 당신의 지갑을 잃어버린 것으로 생각 하십시오.  ",
        "seed_language":  "시드 언어 ",

        "settings_title":  "설정 및 도구 ",
        "download_wallet_file":  "파일로 지갑 다운로드 ",
        "download_wallet":  "다운로드 지갑 ",
        "rename_wallet":  "열린 지갑 이름 바꾸기 ",
        "rename_wallet_placeholder":  "새 지갑 이름 ",
        "change_wallet_start_topoheight":  "변경 지갑 시작 토폴 높이 ",
        "change_wallet_start_topoheight_rare":  "변경 지갑 시작 토폴로지 높이 (드문 사용) 현재: ",
        "change_wallet_password":  "전자 지갑 암호 변경 ",
        "new_password":  "새 암호 ",
        "new_cpassword":  "새 암호 확인 ",
        "rescan_blockchain":  "토폴로에서 블록 체인을 다시 스캔 ",
        "rescan_blockchain_rare":  "없거나 거의 필요 하지 않습니다. 지갑은 20-30 분 동안 바쁘게 됩니다  ",
        "rescan_blockchain_trigger":  "트리거 블록 체인 다시 검색 ",
        "transfer_everything":  "모든 것을 dero 주소로 전송 (dero 균형) ",
        "dero_address":  "dero 주소 ",
        "valid_dero_address_placeholder":  "유효한 dero 주소를 입력 하십시오 ",
        "send_now":  "지금 보내기 ",

        "enter_password":  "당신의 지갑 암호를 입력 하십시오 ",
        "invalid_password":  "지갑 암호가 잘못 되었습니다. 다시 시도 하십시오.  ",
        "password_mismatch":  "암호 불일치 ",
        "password_changed":  "암호 변경 ",
        "small_password":  "지갑 암호는 최소한 5 문자 이어야 합니다. 10 문자 암호를 선호 합니다. ",
        "invalid_address":  "잘못 된 주소, 다시 시도 하십시오 ",
        "invalid_amount":  "잘못 된 금액 ",
        "invalid_payid":  "잘못 된 paymentid ",
        "wallet_name_empty":  "지갑 이름 이어야 한다 1 문자 길이 ",



    }
};


var es = { "translation":
    {
        "language_name":"Español",

        "tr_title":  "DERO web Wallet ",
        "tr_DERO":  "DERO ",
        "tr_wallet":  "Wallet ",
        "tr_close":  "Close ",
        "tr_password":  "Password ",
        "tr_success":  "Success ",

        "carousel_fast_title":  "Fast transActions ",
        "carousel_fast_text":  "DERO transfiere instantáneamente < 12 seconds. ",
        "carousel_privacy_title":  "privacidad inquebrantable por diseño ",
        "carousel_privacy_text":  "la red DERO tiene una privacidad inquebrantable y obligatoria para todas las transacciones. ",
        "carousel_privacy_text2":  "nadie sabe quién pasó/recibió qué/cuándo/dónde. ",
        "carousel_easy_title":  "fácil de usar ",
        "carousel_easy_text":  "oficialmente soportamos casi todos los SO Windows/Mac/Linux/Unix/BSD/Solaris, incluso Android/IOS. ",
        "carousel_tech_title":  "líder de tecnología ",
        "carousel_tech_text":  "líder de la industria con la innovación y características tales como la tecnología DAG, a prueba de balas, TLS cifrado red. ",
        "carousel_orig_title":  "desarrolladores originales ",
        "carousel_orig_text":  "el proyecto DERO se ha desarrollado desde cero y está siendo desarrollado activamente por los desarrolladores originales. ",
        "carousel_touch_title":  "Get in touch ",
        "carousel_touch_text":  "puede ayudar y contribuir al proyecto mediante discusiones, sugerencias, desarrollo, pruebas o incluso simplemente difundiendo la palabra. ",
        "front_available_wallet":  "carpetas disponibles ",
        "front_open_saved_wallet":  "abrir la carpeta seleccionada ",
        "front_delete_saved_wallet":  "eliminar carpeta seleccionada ",
        "front_recover_seed_wallet":  "recuperar cartera usando palabras de SEED (25 palabras) ",
        "front_recover_key_wallet":  "recuperar cartera mediante la clave de recuperación (64 Hex Char) ",
        "front_recover_view_wallet":  "recuperar sólo el monedero de la vista (128 Hex Char) ",
        "front_create_new_wallet":  "crear nueva carpeta ",
        "front_upload_wallet":  "cargar carpeta desde el disco ",
        "control_wallet_seed":  "la semilla de su billetera ",
        "control_wallet_settings":  "Settings ",
        "control_wallet_logout":  "cerrar sesión ",

        "balance_total":  "total ",
        "balance_locked":  "locked ",
        "balance_unlocked":  "desbloqueado ",

        "wallet_address":  "Address ",
        "blockchain_height":  "bloques height ",
        "daemon_address":  "daemon Address ",
        "tab_send":  "Send ",
        "tab_receive":  "Receive ",
        "tab_history":  "TX History ",
        "tab_about":  "About ",

        "tab_send_sendto_label":  "Send to DERO Address ",
        "tab_send_sendto_address_placeholder":  "escriba la dirección DERO válida ",
        "tab_send_amount_label":  "DERO amount ",
        "tab_send_amount_placeholder":  "escriba DERO amount to send ",
        "tab_send_paymentid_label":  "ID de pago (opcional): ",
        "tab_send_paymentid_placeholder":  "Optional PaymentID in Hex ",
        "tab_send_send_transaction":  "Send Transaction ",

        "tab_receive_wallet_address":  "dirección del monedero ",
        "tab_receive_i32_address":  "Integrated 32 Address ",
        "tab_receive_i32_paymentid":  "ID de pago de dirección integrada 32 ",
        "tab_receive_i8_address":  "integrada 8 Address ",
        "tab_receive_i8_paymentid":  "ID de pago integrado de 8 direcciones (esto se cifrará sólo remitente/receptor puede ver esto) ",

        "tab_receive_generate":  "generar dirección integrada ",
        "tab_history_load":  "Load TX History ",
        "tab_history_export_csv":  "exportar a CSV ",

        "tx_confirmation":  "Transfer conFirmation ",
        "tx_input_amount":  "importe de entrada ",
        "tx_sending_amount":  "sending ",
        "tx_fees":  "fees ",
        "tx_change":  "Change ",
        "tx_size":  "TX size ",
        "tx_transfer":  "Transfer ",


        "password_placeholder":  "Password ",
        "cpassword":  "Confirmar contraseña ",
        "cpassword_placeholder":  "Confirmar contraseña ",
        "wallet_start_topoheight":  "monedero Start Topoheight: (opcional) ",
        "recover_wallet":  "recuperar carpeta ",
        "wallet_name":  "nombre del monedero ",
        "wallet_name_quick_placeholder":  "nombre del monedero para la referencia rápida ",

        "recover_seed_title":  "recuperación del monedero mediante palabras de SEED ",
        "25_seed_words":  "25 palabras de la semilla ",

        "recover_key_title":  "recuperación del monedero mediante la clave de recuperación ",
        "recover_key":  "clave de recuperación (64 caracteres hexadecimales) ",

        "recover_viewkey_title":  "recuperación del monedero mediante la tecla de vista ",
        "recover_viewkey":  "ver clave (128 Hex chars) ",

        "create_new_title":  "crear nueva carpeta ",
        "CREATE_NEW":  "crear nueva carpeta ",

        "seed_title":  "su DERO carpeta de semillas ",
        "seed1":  "su billetera se puede recuperar usando la semilla de abajo. ",
        "seed2":  "debe guardar la semilla en una ubicación segura segura. ",
        "seed3":  "compartir su semilla es igual a compartir su billetera. Si su semilla está perdida, considere su billetera como perdida.  ",
        "seed_language":  "SEED Language ",

        "settings_title":  "configuración y herramientas ",
        "download_wallet_file":  "descargar carpeta como archivo ",
        "download_wallet":  "descargar Wallet ",
        "rename_wallet":  "cambiar el nombre de la carpeta abierta ",
        "rename_wallet_placeholder":  "nuevo nombre del monedero ",
        "change_wallet_start_topoheight":  "cambiar carpeta Start TopoHeight ",
        "change_wallet_start_topoheight_rare":  "cambiar carpeta Inicio TopoHeight (raro uso) actual: ",
        "change_wallet_password":  "cambiar la contraseña del monedero ",
        "contraseñaNueva":  "nueva contraseña ",
        "new_cpassword":  "confirme la nueva contraseña ",
        "rescan_blockchain":  "Rescan bloques desde Start topoheight ",
        "rescan_blockchain_rare":  "nunca o raramente se requiere. La billetera se llena por 20-30 minutos  ",
        "rescan_blockchain_trigger":  "Trigger bloques Rescan ",
        "transfer_everything":  "transferir todo a DERO dirección (DERO balance) ",
        "dero_address":  "DERO Address ",
        "valid_dero_address_placeholder":  "escriba la dirección DERO válida ",
        "send_now":  "Send Now ",

        "enter_password":  "Introduzca su contraseña de monedero ",
        "invalid_password":  "contraseña de monedero no válida. Vuelva a intentarlo.  ",
        "password_mismatch":  "contraseña no coincidente ",
        "password_changed":  "Password Changed ",
        "small_password":  "la contraseña del monedero debe ser al menos 5 caracteres. prefiera 10 contraseñas Char. ",
        "invalid_address":  "dirección DERO no válida, vuelva a intentarlo ",
        "invalid_amount":  "cantidad DERO no válida ",
        "invalid_payid":  "inValid PaymentID ",
        "wallet_name_empty":  "el nombre del monedero debe ser al menos un carácter largo ",

    }
};



var fr = { "translation":
    {
        "language_name":"Français",
        "tr_title":  "DERO Portefeuille en ligne ",
        "tr_DERO":  "DERO ",
        "tr_wallet":  "Wallet",
        "tr_close":  "Fermer ",
        "tr_password":  "Mot de passe ",
        "tr_success":  "Succès ",

        "carousel_fast_title":  "Transactions rapides ",
        "carousel_fast_text":  "DERO transfère instantanément en moins de 12 secondes. ",
        "carousel_privacy_title":  "Le respect de la vie privée dès la conception ",
        "carousel_privacy_text":  "Le réseau DERO dispose d'une confidentialité absolue pour toutes les transactions. ",
        "carousel_privacy_text2":  "Personne ne peut savoir qui a dépensé ou reçu quoi, quand et où. ",
        "carousel_easy_title":  "Facile à utiliser ",
        "carousel_easy_text":  "Nous sommes disponible sur les supports Windows, Mac, Linux, UNIX, BSD, Solaris, Android et iOS. ",
        "carousel_tech_title":  "Leader technologique. ",
        "carousel_tech_text":  "Pionnier dans cette technologie avec l'innovation et les fonctionnalités telles que les DAG, les bullet-proofs et le réseau crypté en TLS. ",
        "carousel_orig_title":  "Développeurs initiaux ",
        "carousel_orig_text":  "Le projet DERO a été développé à partir de zéro et est activement développé par les développeurs initiaux. ",
        "carousel_touch_title":  "Entrer en contact ",
        "carousel_touch_text":  "Vous pouvez aider et contribuer au projet par des discussions, des suggestions, un développement, des tests ou tout simplement en partageant le projet. ",
        "front_available_wallet":  "Portefeuilles disponibles ",
        "front_open_saved_wallet":  "Ouvrir le portefeuille sélectionné ",
        "front_delete_saved_wallet":  "Supprimer le portefeuille sélectionné ",
        "front_recover_seed_wallet":  "Restaurer votre portefeuille en utilisant la phrase mnémonique (25 mots) ",
        "front_recover_key_wallet":  "Restaurer votre portefeuille en utilisant la clé de récupération (64 caractères hexadécimaux) ",
        "front_recover_view_wallet":  "Consultation visuelle uniquement de votre portefeuille (128 caractères hexadécimaux) ",
        "front_create_new_wallet":  "Créer un nouveau portefeuille ",
        "front_upload_wallet":  "Restaurer votre portefeuille via le fichier stocké en local ",
        "control_wallet_seed":  "Phrase mnémonique ",
        "control_wallet_settings":  "Paramètres ",
        "control_wallet_logout":  "Déconnexion ",

        "balance_total":  "Total ",
        "balance_locked":  "Montant verrouillé ",
        "balance_unlocked":  "Montant disponible ",

        "wallet_address":  "Addresse ",
        "blockchain_height":  "Taille de la blockchain ",
        "daemon_address":  "Addresse du daemon ",
        "tab_send":  "Envoyer ",
        "tab_receive":  "Recevoir ",
        "tab_history":  "Historique TX ",
        "tab_about":  "À propos ",

        "tab_send_sendto_label":  "Envoyer à l'adresse DERO ",
        "tab_send_sendto_address_placeholder":  "Entrez une adresse DERO valide ",
        "tab_send_amount_label":  "Montant DERO ",
        "tab_send_amount_placeholder":  "Entrez le montant de DERO à envoyer ",
        "tab_send_paymentid_label":  "ID de paiement (optionnel): ",
        "tab_send_paymentid_placeholder":  "ID de paiement optionnel en hexadécimal ",
        "tab_send_send_transaction":  "Envoyer la transaction ",

        "tab_receive_wallet_address":  "Adresse du portefeuille ",
        "tab_receive_i32_address":  "Adresse 32 intégrée ",
        "tab_receive_i32_paymentid":  "ID de paiement de l'adresse 32 intégrée ",
        "tab_receive_i8_address":  "Adresse 8 intégrée ",
        "tab_receive_i8_paymentid":  "ID de paiement d'adresse intégrée 8 (visualisation disponible seulement pour l'expéditeur et le destinateur) ",

        "tab_receive_generate":  "Générer une adresse intégrée ",
        "tab_history_load":  "Charger l'historique TX",
        "tab_history_export_csv":  "Exporter vers CSV ",

        "tx_confirmation":  "Confirmation de transfert ",
        "tx_input_amount":  "Montant d'entrée ",
        "tx_sending_amount":  "Envoi ",
        "tx_fees":  "Frais ",
        "tx_change":  "Modifier ",
        "tx_size":  "Taille TX ",
        "tx_transfer":  "Transfère ",


        "password_placeholder":  "Mot de passe ",
        "cpassword":  "Confirmer le mot de passe ",
        "cpassword_placeholder":  "Confirmer le mot de passe ",
        "wallet_start_topoheight":  "Portefeuille Start Topoheight : (optionel) ",
        "recover_wallet":  "Récupérer le portefeuille ",
        "wallet_name":  "Nom du portefeuille ",
        "wallet_name_quick_placeholder":  "Nom du portefeuille pour une référence rapide ",

        "recover_seed_title":  "Récupération du portefeuille à l'aide de la phrase mnémonique (Seed Words) ",
        "25_seed_words":  "Phrase mnémonique 25 mots ",

        "recover_key_title":  "Récupération du portefeuille à l'aide de la clé privée de récupération ",
        "recover_key":  "Clé privée de récupération (64 caractères hexadécimaux) ",

        "recover_viewkey_title":  "Visualitation du portefeuille à l'aide de la Viewkey ",
        "recover_viewkey":  "Afficher la Viewkey (128 caractères hexadécimaux) ",

        "create_new_title":  "Créer un nouveau portefeuille ",
        "CREATE_NEW":  "Créer un nouveau portefeuille ",

        "seed_title":  "Phrase mnémonique de votre portefeuille DERO ",
        "seed1":  "Votre portefeuille peut être récupéré à l'aide de la phrase mnémonique ci-dessous. ",
        "seed2":  "Vous devez enregistrer la phrase mnémonique dans un emplacement sécurisé. ",
        "seed3":  "Si vous partager votre phrase mnémonique, c'est comme si vous partagiez votre portefeuille. Si votre phrase mnémonique est perdue, considérez votre portefeuille comme perdu.  ",
        "seed_language":  "Langue de la phrase mnémonique ",

        "settings_title":  "Paramètres et réglages ",
        "download_wallet_file":  "Télécharger le portefeuille en tant que fichier ",
        "download_wallet":  "Télécharger le portefeuille ",
        "rename_wallet":  "Renommer le portefeuille ouvert ",
        "rename_wallet_placeholder":  "Nouveau nom du portefeuille ",
        "change_wallet_start_topoheight":  "Changer le portefeuille (commencer TopoHeight) ",
        "change_wallet_start_topoheight_rare":  "Changer le portefeuille en commencant le TopoHeight (utilisation rare) : ",
        "change_wallet_password":  "Changer le mot de passe du portefeuille ",
        "new_password":  "Nouveau mot de passe ",
        "new_cpassword":  "Confirmer le nouveau mot de passe ",
        "rescan_blockchain":  "Commencer une réanalyse du TopoHeight  ",
        "rescan_blockchain_rare":  "Rarement requis. Le portefeuille peut être indisponible jusqu'à une durée de 30 minutes  ",
        "rescan_blockchain_trigger":  "Declenchement d'une réanalyse de la blockchain ",
        "transfer_everything":  "Transférer tout les DERO à une autre adresse (DERO balance) ",
        "dero_address":  "Adresse DERO ",
        "valid_dero_address_placeholder":  "Entrez une adresse DERO valide ",
        "send_now":  "Envoyer maintenant ",

        "enter_password":  "Veuillez entrer le mot de passe de votre portefeuille ",
        "invalid_password":  "Mot de passe du portefeuille invalide. Veuillez réessayer.  ",
        "password_mismatch":  "Incompatibilité du mot de passe. ",
        "password_changed":  "Mot de passe changé. ",
        "small_password":  "Le mot de passe du portefeuille doit être composé de 5 caractères minimum. Nous vous conseillons de utiliser au moins 10 caractères. ",
        "INVALID_ADDRESS":  "Adresse DERO invalide, réessayer ",
        "invalid_amount":  "Montant DERO invalide ",
        "invalid_payid":  "PaiementID invalide ",
        "wallet_name_empty":  "Le nom du portefeuille doit être composé de 1 caractère minimum ",

    }
};

var de = { "translation":
    {
        "language_name":"Deutsch",

        "tr_title":  "DERO Web Wallet ",
        "tr_DERO":  "DERO ",
        "tr_wallet":  "Wallet ",
        "tr_close":  "Close ",
        "tr_password":  "password ",
        "tr_success":  "Success ",

        "carousel_fast_title":  "fast Transactions ",
        "carousel_fast_text":  "DERO überträgt sofort < 12 Sekunden. ",
        "carousel_privacy_title":  "unzerbrechliche PrivatSphäre durch Design ",
        "carousel_privacy_text":  "DERO Network hat unzerbrechlich und obligatorische Privatsphäre für alle Transaktionen. ",
        "carousel_privacy_text2":  "niemand weiß, wer was/wann/wo ausgegeben/erhalten hat. ",
        "carousel_easy_title":  "einfach zu bedienen ",
        "carousel_easy_text":  "Wir unterstützen offiziell fast alle OS Windows/Mac/Linux/Unix/BSD/Solaris, sogar Android/IOS. ",
        "carousel_tech_title":  "Technology Leader ",
        "carousel_tech_text":  "Branchenführer mit Innovation und Features wie DAG-Technologie, Kugel-Proofs, TLS verschlüsseltes Netzwerk. ",
        "carousel_orig_title":  "Original Developers ",
        "carousel_orig_text":  "DERO Project wurde von Grund auf entwickelt und wird von Original-Entwicklern aktiv entwickelt. ",
        "carousel_touch_title":  "Get in Touch ",
        "carousel_touch_text":  "Sie können durch Diskussionen, Anregungen, Entwicklung, Test oder auch nur die Verbreitung des Wortes helfen und zum Projekt beitragen. ",
        "front_available_wallet":  "VerfügBare GeldBörsen ",
        "front_open_saved_wallet":  "Öffnen Sie ausgewählte Geldbörse ",
        "front_delete_saved_wallet":  "Löschen Sie ausgewählte Geldbörse ",
        "front_recover_seed_wallet":  "WiederHerstellung der Geldbörse mit Samen Wörtern (25 Wörter) ",
        "front_recover_key_wallet":  "WiederHerstellung der Geldbörse mit Wiederherstellungs Schlüssel (64 Hex Char) ",
        "front_recover_view_wallet":  "WiederHolen Sie View nur Geldbörse (128 Hex Char) ",
        "front_create_new_wallet":  "neue Geldbörse erstellen ",
        "front_upload_wallet":  "Laden Sie Geldbörse von der Festplatte ",
        "control_wallet_seed":  "Ihr Portemonnaie-Saatgut ",
        "control_wallet_settings":  "Settings ",
        "control_wallet_logout":  "Logout ",

        "balance_total":  "Total ",
        "balance_locked":  "Locked ",
        "balance_unlocked":  "unverschlossen ",

        "wallet_address":  "Adresse ",
        "blockchain_height":  "Blockchain Höhe ",
        "daemon_address":  "Daemon Address ",
        "tab_send":  "Send ",
        "tab_receive":  "empfangen ",
        "tab_history":  "TX History ",
        "tab_about":  "about ",

        "tab_send_sendto_label":  "Senden an DERO Address ",
        "tab_send_sendto_address_placeholder":  "geben Sie gültige DERO-Adresse ",
        "tab_send_amount_label":  "DERO Amount ",
        "tab_send_amount_placeholder":  "Enter DERO-Betrag zu senden ",
        "tab_send_paymentid_label":  "Payment ID (optional): ",
        "tab_send_paymentid_placeholder":  "optional PaymentID in Hex ",
        "tab_send_send_transaction":  "Sende Transaktion ",

        "tab_receive_wallet_address":  "Wallet-Adresse ",
        "tab_receive_i32_address":  "integrierte 32-Adresse ",
        "tab_receive_i32_paymentid":  "integrierte 32 Adresse Payment ID ",
        "tab_receive_i8_address":  "integrierte 8 Adresse ",
        "tab_receive_i8_paymentid":  "integrierte 8-Adresse-Zahlung-ID (Dies wird verschlüsselt nur Absender/Empfänger kann dies sehen) ",

        "tab_receive_generate":  "integrierte Adresse generieren ",
        "tab_history_load":  "Load TX History ",
        "tab_history_export_csv":  "Export to CSV ",

        "tx_confirmation":  "Transfer-Bestätigung ",
        "tx_input_amount":  "Eingabe Menge ",
        "tx_sending_amount":  "senden ",
        "tx_fees":  "Fees ",
        "tx_change":  "Change ",
        "tx_size":  "TX size ",
        "tx_transfer":  "Transfer ",

        "password_placeholder":  "Passwort ",
        "cpassword":  "Passwort bestätigen ",
        "cpassword_placeholder":  "Passwort bestätigen ",
        "wallet_start_topoheight":  "Geldbörse Start Topoheight: (optional) ",
        "recover_wallet":  "Wallet  WiederHerstellen ",
        "wallet_name":  "Wallet Name ",
        "wallet_name_quick_placeholder":  "Wallet Name für Quick Reference ",

        "recover_seed_title":  "Geldbörse-WiederHerstellung mit Samen Wörtern ",
        "25_seed_words":  "25 Samen Wörter ",

        "recover_key_title":  "Geldbörse-WiederHerstellung mit Wiederherstellungs-Taste ",
        "recover_key":  "Recovery Key (64 Hex chars) ",

        "recover_viewkey_title":  "Geldbörse-WiederHerstellung mit View-Taste ",
        "recover_viewkey":  "View Key (128 Hex chars) ",

        "create_new_title":  "neue Geldbörse erstellen ",
        "CREATE_NEW":  "neue Geldbörse erstellen ",

        "seed_title":  "Your DERO Wallet SEED ",
        "seed1":  "Ihr Portemonnaie kann mit dem unten stehenden Samen wieder hergestellt werden. ",
        "seed2":  "Sie müssen den Samen in einem sicheren sicheren Ort zu speichern. ",
        "seed3":  "teilen Sie Ihren Samen ist gleich mit dem Teilen Ihrer Geldbörse. Wenn Ihr Samen verloren geht, betrachten Sie Ihre Geldbörse als verloren.  ",
        "seed_language":  "Samen Sprache ",

        "settings_title":  "Einstellungen und Werkzeuge ",
        "download_wallet_file":  "Download Wallet als Datei ",
        "download_wallet":  "Download Wallet ",
        "rename_wallet":  "Umbenennung offener Geldbörse ",
        "rename_wallet_placeholder":  "New Wallet Name ",
        "change_wallet_start_topoheight":  "Wechsel Geldbörse starten TopoHeight ",
        "change_wallet_start_topoheight_rare":  "Wechsel Geldbörse Start TopoHeight (seltene Verwendung) Strom: ",
        "change_wallet_password":  "Geldbörse Passwort  ändern",
        "new_password":  "neues Passwort ",
        "new_cpassword":  "neues Passwort bestätigen ",
        "rescan_blockchain":  "Rescan Blockchain vom Start topoheight ",
        "rescan_blockchain_rare":  "nie oder selten erforderlich. Geldbörse wird für 20-30 Minuten beschäftigt  ",
        "rescan_blockchain_trigger":  "Trigger Blockchain Rescan ",
        "transfer_everything":  "ÜberTragen Sie alles auf DERO-Adresse (DERO Balance) ",
        "dero_address":  "DERO Address ",
        "valid_dero_address_placeholder":  "geben Sie gültige DERO-Adresse ",
        "send_now":  "Senden Sie jetzt ",

        "enter_password":  "Bitte geben Sie Ihr Wallet-Passwort ",
        "invalid_password":  "Ungültiges Wallet-Passwort. Bitte versuchen Sie es erneut.  ",
        "PASSWORD_MISMATCH":  "Password Mismatch ",
        "PASSWORD_CHANGED":  "Passwort geändert ",
        "small_password":  "Wallet Passwort sollte mindestens 5 Zeichen sein. bevorzugen Sie 10 char Passwörter. ",
        "invalid_address":  "Ungültige DERO-Adresse, bitte Retry ",
        "invalid_amount":  "Invalid DERO-Menge ",
        "invalid_payid":  "Invalid PaymentID ",
        "wallet_name_empty":  "Wallet Name sollte mindestens 1 Zeichen lang ein",


    }
};

var it = {
  "translation":
    {
        "language_name": "Italiano",

        "tr_title": "DERO Web Wallet",
        "tr_DERO": "DERO",
        "tr_wallet": "Portafoglio",
        "tr_close": "Chiudi",
        "tr_password": "Password",
        "tr_success": "Successo",

        "no_wasm": "Per favore riavvia o aggiorna il tuo browser per usare il web wallet.",
        "wallet_minimum_TopoHeight": "Il portafoglio può essere ripristinato dalla TopoHeight",
        "carousel_fast_title" :"Transazioni veloci",
        "carousel_fast_text": "DERO trasferisce instantaneamente in meno di 12 secondi.",
        "carousel_privacy_title" :"Progettato per una privacy infrangibile",
        "carousel_privacy_text": "Privacy obbligatoria e infrangibile in tutte le transazioni sul network di DERO.",
        "carousel_privacy_text2": "Nessuno sa chi ha inviato/ricevuto cosa/quando/dove.",
        "carousel_easy_title": "Facile da usare",
        "carousel_easy_text": "Supportiamo ufficialmente quasi tutti gli OS Windows/Mac/Linux/Unix/BSD/Solaris, anche Android/IOS.",
        "carousel_tech_title": "Leader nella tecnologia",
        "carousel_tech_text": "Leader del settore con innovazioni e caratteristiche come la tecnologia DAG, Bullet-Proofs e network criptato TLS.",
        "carousel_orig_title": "Sviluppatori esclusivi",
        "carousel_orig_text": "Il progetto DERO è stato sviluppato da zero ed è attivamente sviluppato da sviluppatori esclusivi.",
        "carousel_touch_title": "Contattaci",
        "carousel_touch_text": "Puoi aiutare e contribuire al progetto discutendone, lasciando suggerimenti, sviluppando, testando o semplicemente parlandone.",
        "front_available_wallet": "Portafogli disponibili",
        "front_open_saved_wallet": "Apri il portafoglio selezionato",
        "front_delete_saved_wallet": "Rimuovi il portafoglio selezionato",
        "front_recover_seed_wallet": "Recupera il portafoglio usando il SEED (25 parole)",
        "front_recover_key_wallet": "Recupera il portafoglio usando la Recovery Key (64 caratteri esadecimali)",
        "front_recover_view_wallet": "Recupera il portafoglio usando la View Key (128 caratteri esadecimali)",
        "front_create_new_wallet": "Crea nuovo portafoglio",
        "front_upload_wallet": "Carica portafoglio dal disco",
        "control_wallet_seed": "Il SEED del tuo portafoglio",
        "control_wallet_settings": "Impostazioni",
        "control_wallet_logout": "Logout",

        "balance_total": "Totale",
        "balance_locked": "Bloccato",
        "balance_unlocked": "Sbloccato",

        "wallet_address": "Indirizzo",
        "blockchain_height": "Blockchain Height",
        "daemon_address": "Indirizzo del daemon",
        "tab_send": "Invia",
        "tab_receive": "Ricevi",
        "tab_history": "Cronologia delle TX",
        "tab_about": "About",

        "tab_send_sendto_label": "Invia a indirizzo DERO",
        "tab_send_sendto_address_placeholder": "Inserisci un indirizzo DERO valido",
        "tab_send_amount_label": "Quantità di DERO",
        "tab_send_amount_placeholder": "Inserisci la quantità di DERO da inviare",
        "tab_send_paymentid_label": "Payment ID (opzionale):",
        "tab_send_paymentid_placeholder": "PaymentID opzionale in esadecimale",
        "tab_send_send_transaction": "Invia transazione",

        "tab_receive_wallet_address": "Indirizzo del portafoglio",
        "tab_receive_i32_address": "Indirizzo Integrated 32",
        "tab_receive_i32_paymentid": "Payment ID dell'indirizzo Integrated 32 Address",
        "tab_receive_i8_address": "Indirizzo Integrated 8",
        "tab_receive_i8_paymentid": "Payment ID dell'indirizzo Integrated 8 (Sarà criptato cosicché solo il mittente/destinatario potrà vederlo)",

        "tab_receive_generate": "Genera indirizzo Integrated",
        "tab_history_load": "Carica cronologia delle TX",
        "tab_history_export_csv": "Esporta in file CSV",

        "tx_confirmation": "Conferma trasferimento",
        "tx_input_amount": "Quantità inviata",
        "tx_sending_amount": "Inviando",
        "tx_fees": "Commissione",
        "tx_change": "Cambio",
        "tx_size": "Dimensione della TX",
        "tx_transfer": "Trasferisci",

        "password_placeholder": "Password",
        "cpassword": "Conferma password",
        "cpassword_placeholder": "Conferma password",
        "wallet_start_TopoHeight": "Wallet start TopoHeight: (opzionale)",
        "recover_wallet": "Recupera portafoglio",
        "wallet_name": "Nome del portafoglio",
        "wallet_name_quick_placeholder": "Nome del portafoglio per riferimento rapido",

        "recover_seed_title": "Recupera portafoglio usando il seed",
        "25_seed_words": "25 parole del seed",

        "recover_key_title": "Recupera portafoglio usando la Recovery Key",
        "recover_key": "Recovery Key (64 caratteri esadecimali)",

        "recover_viewkey_title": "Recupera portafoglio usando la View Key",
        "recover_viewkey": "View Key (128 caratteri esadecimali)",

        "create_new_title": "Crea nuovo portafoglio",
        "create_new": "Crea nuovo portafoglio",

        "seed_title": "Il SEED del tuo portafoglio DERO",
        "seed1": "Il tuo portafoglio può essere recuperato usando il seed sottostante.",
        "seed2": "Devi conservare il SEED in una posizione sicura.",
        "seed3": "Condividere il tuo SEED equivale a condividere il tuo portafoglio. Se perdi il tuo seed, perdi il tuo portafoglio.",
        "seed_language": "Lingua del seed",

        "settings_title": "Impostazioni e Strumenti",
        "download_wallet_file": "Scarica il file del portafoglio",
        "download_wallet": "Scarica portafoglio",
        "rename_wallet": "Rinomina il portafoglio aperto",
        "rename_wallet_placeholder": "Nuovo nome del portafoglio",
        "change_wallet_start_TopoHeight": "Modifica la Wallet Start TopoHeight",
        "change_wallet_start_TopoHeight_rare": "Modifica la Wallet Start TopoHeight (Uso raro) Corrente:",
        "change_wallet_password": "Modifica la password del portafoglio",
        "new_password": "Nuova password",
        "new_cpassword": "Conferma nuova password",
        "rescan_blockchain": "Ripeti la scansione della Blockchain dalla TopoHeight iniziale",
        "rescan_blockchain_rare": "Mai o quasi mai richiesto. Il portafoglio sarà occupato per 20-30 minuti",
        "rescan_blockchain_trigger": "Ripeti la scansione della Blockchain",
        "transfer_everything": "Invia l'intero saldo a indirizzo DERO",
        "dero_address": "Indirizzo DERO",
        "valid_dero_address_placeholder": "Inserisci un indirizzo DERO valido",
        "send_now": "Invia ora",

        "enter_password": "Per favore inserisci la password del tuo portafoglio",
        "invalid_password": "Password del portafoglio non valida. Riprova, per favore.",
        "password_mismatch": "Le password non combaciano",
        "password_changed": "Password modificata",
        "small_password": "La password del portafoglio dovrebbe essere lunga almeno 5 caratteri, preferibilmente 10.",
        "invalid_address": "Indirizzo DERO non valido. Riprova, per favore",
        "invalid_amount": "Quantità di DERO non valida",
        "invalid_payid": "PaymentID non valido",
        "wallet_name_empty": "Il nome del portafoglio dovrebbe essere lungo almeno 1 carattere",
    }
};







// we can enable of disable languages here
var translations = {
    "en": en,  // english
    "zh-CN": zh_CN, // chinese simplified
    "zh-TW": zh_TW, // chinese traditional
    "ja" : ja, // Japanese
    "ko": ko,
    "es":es,
    "fr":fr,
    "de":de,
    "it":it,
};


var language_option_string = "";
var stored_lang = Cookies.get('lang');

for (var x in translations) {
    if (typeof(stored_lang) != "undefined") {
        if  (x === stored_lang ) {
            language_option_string = language_option_string +   '<option class="lang"  data-lang="' + x  +'" selected >' + translations[x]["translation"].language_name + '</option>';
        } else {
            language_option_string = language_option_string +   '<option class="lang"  data-lang="' + x  +'">' + translations[x]["translation"].language_name + '</option>';
        }

    } else {
        language_option_string = language_option_string +   '<option class="lang"  data-lang="' + x  +'">' + translations[x]["translation"].language_name + '</option>';
    }
}

// update the new language picker
language_picker.innerHTML= language_option_string;


function getFirstBrowserLanguage() {
    var nav = window.navigator,
        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
        i,
        language,
        len,
        shortLanguage = null;

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
        console.log(nav.languages);
        for (i = 0; i < nav.languages.length; i++) {
            language = nav.languages[i];
            len = language.length;
            if (!shortLanguage && len) {
                shortLanguage = language;
            }
            if (language && len>=2) {
                return language;
            }
        }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]];
        len = language.length;
        if (!shortLanguage && len) {
            shortLanguage = language;
        }
        if (language && len > 2) {
            return language;
        }
    }

    return shortLanguage;
}


